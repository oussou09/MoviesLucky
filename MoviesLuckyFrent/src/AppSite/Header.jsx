import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import "../assets/Loading.css";
import logout from '../assets/imgs/svgs/logout.svg';
import profile from '../assets/imgs/svgs/profile.svg';
import setting from '../assets/imgs/svgs/setting.svg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of browserHistory
import { AuthContext } from './utils/AuthContext';
import { SnakAlert, SnakAlertError } from './AlertMessage/SnakAlert';
import { getCsrfToken } from './utils/csrfTokenCheck';

// Function to handle authenticated switch logic
const renderAuthContent = (authenticated, users, onSubmit, profile, logout) => {
    switch (authenticated) {
      case true:
        return (
          <li className="relative group">
            <Link
              to={`/profile/${users?.id}`}
              className="hover:text-blue-500 text-lg pr-8 flex items-center"
            >
              <img
                src={profile}
                alt="icon"
                style={{
                  width: '35px',
                  height: '35px',
                  display: 'block',
                  border: '2px solid white',
                  padding: '5px',
                  borderRadius: '50%',
                }}
              />
            </Link>

            {/* Dropdown menu */}
            <ul className="absolute -left-1/4 mt-2 space-y-2 bg-none text-gray-200 font-semibold shadow-lg rounded-lg py-2 w-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <li className="border-white border-b-4 px-[10px]">
                <button onClick={onSubmit}
                  className="px-[10px] py-2 hover:text-blue-500 flex justify-evenly items-center">
                  Logout
                  <img src={logout} className="w-7 h-7 ml-[6px]" alt="icon" />
                </button>
              </li>
            </ul>
          </li>
        );
      case false:
        return (
          <li>
            {/* Sign In Button */}
            <Link
              to="/login"
              className="relative inline-flex items-center justify-start inline-block px-[35px] py-[10px] overflow-hidden font-bold rounded-md group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Sign In
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-md"></span>
            </Link>
          </li>
        );
      default:
        return (
        <li className="relative group">
            <Link
              to={`/profile/${users?.id}`}
              className="hover:text-blue-500 text-lg pr-8 flex items-center"
            >
              <img
                src={profile}
                alt="icon"
                style={{
                  width: '35px',
                  height: '35px',
                  display: 'block',
                  border: '2px solid white',
                  padding: '5px',
                  borderRadius: '50%',
                }}
              />
            </Link>
        </li>
        )
    }
  };


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate hook

  const { user, authenticated, loading } = useContext(AuthContext); // Use loading from context
  const [users, setUsers] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    if (user && authenticated) {
      setUsers(user);
    }
  }, [user, authenticated]);

  const onSubmit = async () => {


    getCsrfToken()
    .then(csrfToken => axios.post('http://127.0.0.1:8000/api/logout', {}, {
      headers: {
        'X-XSRF-TOKEN': csrfToken,
        Authorization: `Bearer ${Cookies.get('auth_token')}`,
      },
      withCredentials: true,
    })
      .then(() => {
        Cookies.remove('auth_token');
        navigate('/');
        setAlertMessage(
            `${users.firstName} ${users.lastName} logout successfully .`
        );
        setIsError(false);
        setAlertOpen(true);
        window.location.reload(); // Reload to reflect the authentication state
      })
      .catch(error => {
        console.error('Error logging out:', error);
        setAlertMessage(`Sorry ${users.firstName} ${users.lastName} !\n\nFailed to logout.`);
        setIsError(true);
        setAlertOpen(true);
      })
    )
  };


  if (loading) {
    <div className="fixed top-0 left-0 w-full z-50 bg-black border-b-4 border-white ">
    <div className="container mx-auto">
      <div className="flex justify-between items-center h-[70px]">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          {/* <i className="bx bx-movie-play bx-tada text-blue-600"></i> */}
          {/* <i className="fas fa-play-circle text-blue-600 animate-bounce"></i> */}
          <FontAwesomeIcon icon={faBolt} className="text-blue-600 animate-bounce" />
          <span className="text-3xl ml-1">Movies</span><span className= "text-2xl text-blue-600">Lucky</span>
          <FontAwesomeIcon icon={faBolt} className="text-blue-600 animate-bounce" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-6 text-white font-semibold">
          <li><Link to="/" className="hover:text-blue-500 text-lg pr-8">Home</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 text-lg pr-8">Contact</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 text-lg pr-8">About</Link></li>

          <li className="relative group">
            <a className="hover:text-blue-500 text-lg pr-8 flex items-center" >
              <img
                src={profile}
                alt="icon"
                style={{
                  width: '35px',
                  height: '35px',
                  display: 'block',
                  border: '2px solid white',
                  padding: '5px',
                  borderRadius: '50%',
                }}
              />
            </a>
          </li>

        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden mx-5">
          <button className="focus:outline-none" >
            <div className='w-6 h-0.5 bg-white mb-1 rotate-45 transform' />
          </button>
        </div>
      </div>
    </div>
  </div>
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black border-b-4 border-white ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[70px]">
          <Link to="/" className="text-white text-2xl font-bold flex items-center">
            {/* <i className="bx bx-movie-play bx-tada text-blue-600"></i> */}
            {/* <i className="fas fa-play-circle text-blue-600 animate-bounce"></i> */}
            <FontAwesomeIcon icon={faBolt} className="text-blue-600 animate-bounce" />
            <span className="text-3xl ml-1">Movies</span><span className= "text-2xl text-blue-600">Lucky</span>
            <FontAwesomeIcon icon={faBolt} className="text-blue-600 animate-bounce" />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center items-center space-x-6 text-white font-semibold">
            <li><Link to="/" className="hover:text-blue-500 text-lg pr-8">Home</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 text-lg pr-8">Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 text-lg pr-8">About</Link></li>

            {/* Render authentication-based content */}
            {renderAuthContent(authenticated, users, onSubmit, profile, logout)}

          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden mx-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <div className={`w-6 h-0.5 bg-white mb-1 ${isOpen ? 'rotate-45 transform' : ''}`} />
              <div className={`w-6 h-0.5 bg-white ${isOpen ? '-rotate-45 transform' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black text-white space-y-4 mt-4 py-4">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          {authenticated ? (
            <>
            <li className="flex items-center space-x-2">
            <Link to={`/profile/${users?.id}`}
                //{`/profile/${users.id}`}
             className="hover:text-blue-500 text-lg pr-2 flex items-center">
            Profile
                <img
                src={profile}
                alt="icon"
                style={{
                    width: '25px',
                    height: '25px',
                    display: 'block',
                    border: '2px solid white',
                    padding: '5px',
                    marginLeft: '6px',
                    borderRadius: '50%',
                }}
                />
            </Link>
            </li>
            <li className="flex items-center space-x-2">
            <button onClick={onSubmit} className="hover:text-blue-500 px-1 py-2 text-white rounded flex items-center">
                Logout
                <img src={logout} className="w-[25px] h-[25px] ml-[6px]" alt="logout icon" />
            </button>
            </li>
            </>
            ) : (
            <li>
                <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Sign In
                </Link>
            </li>
          )}
        </ul>
      )}

        {isError ? (
            <SnakAlertError
                alertOpen={alertOpen}
                alertMessage={alertMessage}
                onClose={() => setAlertOpen(false)}
            />
        ) : (
            <SnakAlert
                alertOpen={alertOpen}
                alertMessage={alertMessage}
                onClose={() => setAlertOpen(false)}
            />
        )}
    </div>
  );
}



