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
      // Fetch user info if token exists
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
        .then(() => {
            const csrfToken = Cookies.get('XSRF-TOKEN');
          return axios.get('http://127.0.0.1:8000/api/user', {
            withCredentials: true,
            headers: {
                'X-XSRF-TOKEN': csrfToken,  // Add the CSRF token here
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
