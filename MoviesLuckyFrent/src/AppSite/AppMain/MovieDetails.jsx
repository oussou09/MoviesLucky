import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Badge } from '@mui/material'; // Correct import from MUI
import "../../assets/Loading.css";

export default function MovieDetails() {

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const { title } = useParams();

    // console.log(title)

    useEffect(() => {
        // Fetch movies from backend
        axios.get(`http://127.0.0.1:8000/api/movie/${title}`)
          .then(response => {
            setMovie(response.data.MovieShow);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching movies:', error);

            setLoading(false);
          });
      }, [title]);




          // Display loading animation while fetching data
    if (loading) {
      return (
        <div className='container mx-auto px-8 lg:px-0 py-[100px] lg:py-[148px] h-full '>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl">
                <div className="loader p-5 m-5">
                    <div className="wrapper">
                        <div className="circle"></div> {/* Placeholder for thumbnail */}
                        <div className="line-1"></div>  {/* Placeholder for title */}
                        <div className="line-2"></div>  {/* Placeholder for year */}
                        <div className="line-2"></div>  {/* Placeholder for extract */}
                        <div className="line-3"></div>  {/* Placeholder for genres */}
                    </div>
                </div>
            </div>
        </div>
      );
    }



    return (
        <div className='container mx-auto px-8 lg:px-0 py-[100px] lg:py-[148px] h-full '>
        {movie ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl">
                <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full rounded-lg"
                />
                <div className="col-span-2 flex flex-col gap-4">
                    <div>
                    <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {movie.title}
                    </h1>
                    </div>

                    <p className="text-md text-white font-semibold">
                    Release date: <span className="text-muted-foreground">{movie.year}</span>
                    </p>

                    {movie.extract && (
                    <blockquote className="border-l-2 pl-6 text-white italic">
                        {movie.extract}
                    </blockquote>
                    )}

                    <div className="flex flex-row flex-wrap gap-2">
                    <p className="scroll-m-20 text-md text-white font-semibold tracking-tight flex justify-center items-center">
                        Genres:
                    </p>
                    {movie.genres && movie.genres.map((genre, index) => (
                        <ul key={index}>
                        <li>
                            <Badge className="text-white bg-gray-800 px-5 py-2 rounded-lg">{genre}</Badge>
                        </li>
                        </ul>
                    ))}
                    </div>

                    <div className="flex flex-row flex-wrap gap-2">
                    <p className="scroll-m-20 text-md text-white font-semibold tracking-tight flex justify-center items-center">
                        Cast:
                    </p>
                    {movie.cast && movie.cast.map((actor, index) => (
                        <ul key={index}>
                        <li>
                            <Badge className="text-white bg-gray-800 px-5 py-2 rounded-lg">{actor}</Badge>
                        </li>
                        </ul>
                    ))}
                    </div>
                </div>
            </div>
        ) : (
            <div>Loading...</div>  // Simple loading indicator
        )}
        </div>
      );
}
