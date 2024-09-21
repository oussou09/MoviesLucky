import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authUtils';


const AuthRedirect = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" /> : children;
};
export default AuthRedirect
