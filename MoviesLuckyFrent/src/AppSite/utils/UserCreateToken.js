// src/utils/UserCreateToken.js
import axios from 'axios';
import Cookies from 'js-cookie';

// Axios instance with CSRF token handling and credentials
const UserCreateToken = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // Base API URL
    withCredentials: true, // Allow sending credentials with requests
});

UserCreateToken.interceptors.request.use((config) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    if (csrfToken) {
        config.headers['X-XSRF-TOKEN'] = csrfToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default UserCreateToken;
