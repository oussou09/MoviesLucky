import React from 'react'
import AuthFormIcon from '../../../../assets/imgs/svgs/AuthFormIcon.webp'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import UserCreateToken from '../../../utils/UserCreateToken';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of browserHistory
import Cookies from 'js-cookie';
import { getCsrfToken } from '../../../utils/csrfTokenCheck';


export default function FromLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();  // Initialize the navigate hook

    const onSubmit = async (data) => {
        const ValueDataContact = {
            email: data.email,
            password: data.password
        };

getCsrfToken()
  .then(csrfToken =>  axios.post('http://127.0.0.1:8000/api/login', ValueDataContact, {
            withCredentials: true, // Ensure credentials are included
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': csrfToken,  // Use the existing CSRF token
            }
        })
        .then(response => {
            console.log('Login successful:', response);
            // Store the auth token in cookies
            Cookies.set('auth_token', response.data.token, { expires: 7 });
            navigate('/'); // Redirect to the desired route
            window.location.reload(); // Reload to reflect the authentication state
        })
        .catch(error => {
            console.error('Login error:', error);
        })
    )};







  return (
<div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <form method='POST' onSubmit={handleSubmit(onSubmit)} className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-gray-400 py-10 px-10">
                <img src={AuthFormIcon} alt="AuthFormIcon" className='pt-8' />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input id='email' name='email' type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Please enter a valid email address'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Email cannot exceed 50 characters'
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && <p className='text-sm text-red-400 mt-2'>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-3">
                            <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id='password' name='password' type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                    {
                                        ...register('password', {
                                            required: 'Password is required',
                                            pattern: {
                                                value: /^.{10,}$/,
                                                message: 'Password must be at least 8 characters long, with at least one letter and one number'
                                            },
                                            maxLength: {
                                                value: 40,
                                                message: 'Password cannot exceed 20 characters'
                                            }
                                        })
                                    }
                                />
                            </div>
                            {errors.password && <p className='text-sm text-red-400 mt-2'>{errors.password.message}</p>}
                        </div>
                    </div>

                    <div className="mb-8 flex items-center justify-between">
                        {/* <!-- Remember me checkbox --> */}
                        <div className="flex items-center">
                            <input
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            type="checkbox"
                            id="exampleCheck2" />
                            <label
                            className="ml-2 text-gray-600 hover:cursor-pointer"
                            htmlFor="exampleCheck2">
                            Remember me
                            </label>
                        </div>

                        {/* <!-- Forgot password link --> */}
                        <a href="#!" className="text-primary hover:underline">Forgot password?</a>
                    </div>

                    <div className="-mx-3 flex justify-center items-center">
                        <div className="w-auto px-3 mb-5 md:w-full">
                            <button className="block w-full max-w-xs mx-auto bg-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white text-black rounded-lg px-9 md:px-3 py-3 font-semibold">Login</button>
                        </div>
                    </div>

                    {/* <!-- Register link --> */}
                    <div className="text-center lg:text-center">

                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                        Dont have an account?
                        <Link
                        to="/register"
                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 border-b-2 border-gray-500 ml-2"
                        >
                            Register
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}
