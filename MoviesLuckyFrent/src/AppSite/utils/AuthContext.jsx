import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('auth_token'); // Retrieve the token from cookies

    if (token) {
      setAuthenticated(true);

      const csrfToken = Cookies.get('XSRF-TOKEN'); // Check for existing CSRF token

      if (!csrfToken) {
        // If CSRF token is not available, fetch it
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
          .then(() => {
            const newCsrfToken = Cookies.get('XSRF-TOKEN'); // Get new CSRF token after fetch
            return axios.get('http://127.0.0.1:8000/api/user', {
              withCredentials: true,
              headers: {
                'X-XSRF-TOKEN': newCsrfToken,  // Use the newly fetched CSRF token
                'Authorization': `Bearer ${token}`, // Use Bearer token
              },
            });
          })
          .then(response => {
            setUser(response.data.user);
            console.log('User info:', response.data.user);
          })
          .catch(error => {
            console.error('Error fetching user:', error.response ? error.response.data : error.message);
            setAuthenticated(false);
            setUser(null);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        // If CSRF token exists, make the request directly
        axios.get('http://127.0.0.1:8000/api/user', {
          withCredentials: true,
          headers: {
            'X-XSRF-TOKEN': csrfToken,  // Use existing CSRF token
            'Authorization': `Bearer ${token}`, // Use Bearer token
          },
        })
          .then(response => {
            setUser(response.data.user);
          })
          .catch(error => {
            console.error('Error fetching user:', error.response ? error.response.data : error.message);
            setAuthenticated(false);
            setUser(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      // If no token, clear user and set to not authenticated
      setAuthenticated(false);
      setUser(null);
      setLoading(false);
    }
  }, []); // Run on mount only


  return (
    <AuthContext.Provider value={{ user, authenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
