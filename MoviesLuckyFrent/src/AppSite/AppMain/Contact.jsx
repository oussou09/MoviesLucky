// import React, { useEffect, useState } from "react";
import ContactImg from '../../assets/imgs/contact-img.png'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { SnakAlert, SnakAlertError } from '../AlertMessage/SnakAlert';



const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isError, setIsError] = useState(false);


  const onSubmit = async (data) => {
    const ValueDataContact = {
        username: data.username,
        email: data.email,
        message: data.message
    }

    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
    .then(() => {
        const csrfToken = Cookies.get('XSRF-TOKEN');
        axios.post('http://127.0.0.1:8000/api/contact-data', ValueDataContact,
            {
            withCredentials: true, // Ensure credentials are included
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': csrfToken,  // Add the CSRF token here
            }
        })
        .then(response => {
            console.log('Form submitted:', response);
            reset();
            setAlertMessage(
                `Hello ${data.name}! We received your message successfully. We will respond to you as fast as we can at your email ${data.email}.`
            );
            setIsError(false);
            setAlertOpen(true);
        })
        .catch(error => {
            console.error('Error posting data::', error);
            setAlertMessage(`Sorry ${data.username}!\n\nFailed to send your message.`);
            setIsError(true);
            setAlertOpen(true);
        });
    })
    .catch(error => {
        console.error('Error fetching CSRF token:', error);
    });
};


  return (
    <div className="h-auto pt-20 pb-6">
      {/* Contact Section */}
      <section className="w-[95%] max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 lg:pt-20">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl md:text-5xl mb-4">Get in touch</h1>
          {/* {success && (
            <div className="bg-green-500 text-white py-2 px-4 mb-4">
              Your message has been sent successfully!
            </div>
          )} */}
          <form  method='POST' onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full p-4 text-lg rounded-lg border-2 border-white bg-transparent text-white focus:outline-none"
                {...register('username', {
                    required: 'username is required',
                    pattern: {
                        value: /^[A-Za-z\s]+$/i,
                        message: 'username should contain only letters and spaces'
                    },
                    minLength: {
                        value: 5,
                        message: 'username must be at least 2 characters long'
                    },
                    maxLength: {
                        value: 50,
                        message: 'username cannot exceed 30 characters'
                    }
                })}
              />
               {errors.username && <p className='text-sm text-red-400 mt-2'>{errors.username.message}</p>}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full p-4 text-lg rounded-lg border-2 border-white bg-transparent text-white focus:outline-none"
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
              {errors.email && <p className='text-sm text-red-400 mt-2'>{errors.email.message}</p>}
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className="w-full p-4 text-lg rounded-lg border-2 border-white bg-transparent text-white focus:outline-none resize-none"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters long'
                },
                maxLength: {
                    value: 500,
                    message: 'Message cannot exceed 500 characters'
                },
                pattern: {
                    value: /^[A-Za-z0-9 .,!?'"-]+$/i,
                    message: 'Message can only contain letters, numbers, and basic punctuation'
                }
            })}
            />
            {errors.message && <p className='text-sm text-red-400 mt-1'>{errors.message.message}</p>}
            <button
              type="submit"
              className="py-3 px-10 bg-blue-600 text-white text-lg font-bold rounded-full hover:bg-blue-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[550px] animate-bounce">
            <img
              src={ContactImg} // Adjust the image path according to your structure
              alt="Contact"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Address Section */}
      <h1 className="text-center text-white text-4xl mb-8">Find us Quickly</h1>
      <div className="w-[90%] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-white">
          <h2 className="text-xl mb-2">Tokyo</h2>
          <p className="text-base">Phone: (814) 842-3838</p>
          <p className="text-base">Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
          <p className="text-base">Email: demo@website.com</p>
        </div>

        <div className="text-white">
          <h2 className="text-xl mb-2">USA</h2>
          <p className="text-base">Phone: (814) 842-3838</p>
          <p className="text-base">Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
          <p className="text-base">Email: demo@website.com</p>
        </div>

        <div className="text-white">
          <h2 className="text-xl mb-2">Canada</h2>
          <p className="text-base">Phone: (814) 842-3838</p>
          <p className="text-base">Address: 264 Pine Pitch RdBuffalo Mills, Pennsylvania(PA), 15534</p>
          <p className="text-base">Email: demo@website.com</p>
        </div>
      </div>
        {/* Use the appropriate alert component based on the error state */}
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
};

export default Contact;
