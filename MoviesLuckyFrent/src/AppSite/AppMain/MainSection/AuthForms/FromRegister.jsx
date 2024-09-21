import React from 'react'
import AuthFormIcon from '../../../../assets/imgs/svgs/AuthFormIcon.webp'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function FromRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();  // Initialize the navigate hook

    // const onSubmit = async (data) => {
    //     const ValueDataContact = {
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         email: data.email,
    //         password: data.password
    //     }
    //     try {

    //         await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {
    //             withCredentials: true,
    //         });
    //       const result = await axios.post('http://127.0.0.1:8000/api/register', ValueDataContact,
    //         {
    //             withCredentials: true,
    //         }
    //        );
    //        reset();
    //        navigate('/login');
    //     //    browserHistory.push('/login')
    //       console.log('Form submitted:', result);
    //     } catch (error) {
    //       console.log('Error posting data:', error);
    //       console.error(ValueDataContact);

    //     }
    //   };



    const onSubmit = async (data) => {
        const ValueDataContact = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
            .then(() => {
                const csrfToken = Cookies.get('XSRF-TOKEN');
                axios.post('http://127.0.0.1:8000/api/register', ValueDataContact,
                    {
                    withCredentials: true, // Ensure credentials are included
                    headers: {
                        'Content-Type': 'application/json',
                        'X-XSRF-TOKEN': csrfToken,  // Add the CSRF token here
                    }
                })
                .then(response => {
                    console.log('Registration successful:', response);
                    navigate('/login');
                })
                .catch(error => {
                    console.log(ValueDataContact);

                    console.error('Registration error:', error);
                });
            })
            .catch(error => {
                console.error('Error fetching CSRF token:', error);
            });
      };




  return (
<div className="min-w-screen min-h-screen bg-[#181616] flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <form method='POST' onSubmit={handleSubmit(onSubmit)} className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-gray-400 py-10 px-10">
                <img src={AuthFormIcon} alt="AuthFormIcon" className='pt-8' />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">Register</h1>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="firstName" className="text-xs font-semibold px-1">First name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id='firstName' name='firstName' type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"
                                {
                                    ...register('firstName', {
                                        required: 'First name is required',
                                        pattern: {
                                            value: /^[a-zA-Z]+$/,
                                            message: 'Please enter a valid first name (only letters allowed)'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'First name cannot exceed 30 characters'
                                        }
                                    })
                                }
                                />
                            </div>
                            {errors.firstName && <p className='text-sm text-red-400 mt-2'>{errors.firstName.message}</p>}
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="lastName" className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input  id='lastName' name='lastName' type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"
                                    {
                                        ...register('lastName', {
                                            required: 'Last name is required',
                                            pattern: {
                                                value: /^[a-zA-Z]+$/,
                                                message: 'Please enter a valid last name (only letters allowed)'
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: 'Last name cannot exceed 30 characters'
                                            }
                                        })
                                    }
                                />
                            </div>
                            {errors.lastName && <p className='text-sm text-red-400 mt-2'>{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input  id='email' name='email' type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"
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
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="password" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id='password' name='password' type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                {
                                    ...register('password', {
                                        required: 'Password is required',
                                        // pattern: {
                                        //     value: /^.{10,}$/,
                                        //     message: 'Password must be at least 8 characters long, with at least one letter and one number'
                                        // },
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
                    <div className="-mx-3 flex justify-center items-center">
                        <div className="w-auto px-3 mb-5 md:w-full">
                            <button className="block w-full max-w-xs mx-auto bg-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white text-black rounded-lg px-9 md:px-3 py-3 font-semibold">Login</button>
                        </div>
                    </div>
                    {/* <!-- Register link --> */}
                    <div className="text-center lg:text-center">
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                        Already have account?
                        <a
                        href="/login"
                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 border-b-2 border-gray-500 ml-2"
                        >
                            Login
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}
