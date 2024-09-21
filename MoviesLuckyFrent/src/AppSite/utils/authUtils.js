import React from 'react';
import Cookies from 'js-cookie';


// authUtils.js
export function isAuthenticated() {
  const autkToken = Cookies.get('auth_token');
  return !!autkToken; // Return true if the token exists, false otherwise
}
