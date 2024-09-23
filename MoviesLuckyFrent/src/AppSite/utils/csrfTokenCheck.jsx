// csrfHelper.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const getCsrfToken = () => {
  const csrfToken = Cookies.get('XSRF-TOKEN');
  if (csrfToken) {
    return Promise.resolve(csrfToken);
  }
  return axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
    .then(() => Cookies.get('XSRF-TOKEN'));
};
