import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { getCsrfToken } from '../../../utils/csrfTokenCheck';
import { AuthContext } from '../../../utils/AuthContext';
import usericon from '../../../../assets/imgs/svgs/user.svg';


export default function CommantMovieDetails() {

    const { user, authenticated, loading } = useContext(AuthContext); // Use loading from context
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { title } = useParams();
    const [comments, setComments] = useState([]);
    const timeAgo = (date) => {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
    };

    useEffect(() => {
        // Fetch comments for the specific movie title
        axios.get(`http://127.0.0.1:8000/api/Comments/${title}`, {
            withCredentials: true, // Ensure credentials are included
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${Cookies.get('auth_token')}`, // Send the auth token
                'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'), // Send the CSRF token (if applicable)
            }
        })
        .then(response => {
            setComments(response.data); // Set the comments from the API response
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
    }, [title]); // Re-run the effect when the title changes

    useEffect(() => {
        // console.log('Updated comments:', comments); // This will log the comments after state has been updated
    }, [comments]); // This will run whenever the `comments` state changes

    const onSubmit = async (data) => {
        const ValueDataContact = {
            title_movie: title,
            description: data.message

        }

        getCsrfToken()
            .then(csrfToken => axios.post('http://127.0.0.1:8000/api/Comments', ValueDataContact,
                {
                withCredentials: true, // Ensure credentials are included
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Cookies.get('auth_token')}`, // Send the auth token
                    'X-XSRF-TOKEN': csrfToken, // Send the CSRF token (if applicable)
                }
            })
            .then(response => {
                console.log('Form submitted:', response);
                setComments((prevComments) => [...prevComments, response.data.comment]);
                reset();
            })
            .catch(error => {
                console.error('Error posting data::', error);
            })
        )
    };

  return (
<section className="pb-24 relative bg-[#181616]">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
      <h2 className="w-full text-white text-4xl font-bold font-manrope leading-normal">Comments</h2>
      <form method='POST' onSubmit={handleSubmit(onSubmit)} className="w-full flex-col justify-start items-start gap-5 flex">
        <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
          <img className="w-10 h-10 object-cover" src={usericon} alt="user image" />
          <textarea
                disabled={!authenticated}
                name=""
                rows="2"
                className={`w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg font-normal leading-7 bg-white ${!authenticated ? 'opacity-25 text-center pt-3 text-white' : ''}`}
                placeholder={authenticated ? "Write your thoughts here..." : "Login before Add Comment"}
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
            {errors.message && <p className='text-sm text-red-400 mt-2'>{errors.message.message}</p>}
        </div>
        <button disabled={!authenticated} className={`px-5 py-2.5 bg-blue-600 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ${!authenticated ? 'opacity-25' : ''}`}>
          <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">Post your comment</span>
        </button>
      </form>
      <div className="w-full flex-col justify-start items-start gap-8 flex">
        {/* First comment */}

        {comments.length > 0 ? (
        comments.map((comment) => (
        <div key={comment.id} className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">

            <img className="w-10 h-10 rounded-full object-cover" src={usericon} alt="user image" />
            <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="w-full justify-start items-start flex-col flex gap-1">
                    <div className="w-full justify-between items-start gap-1 inline-flex">
                        <h5 className="text-white text-sm font-semibold leading-snug">
                            {comment.user ? `${comment.user.firstName} ${comment.user.lastName}` : `${user.firstName} ${user.lastName}`}
                        </h5>
                        <span className="text-right text-gray-400 text-xs font-normal leading-5">
                            {timeAgo(comment.created_at)}
                        </span>
                    </div>
                    <h5 className="text-gray-300 text-sm font-normal leading-snug">
                        {comment.description}
                    </h5>
                </div>
            </div>
        </div>

            ))
        ) : (
            <p className='text-white text-xl font-bold'>There is No comments yet.</p>
        )}


        {/* Repeat for other comments */}
      </div>
    </div>
  </div>
</section>

  )
}

