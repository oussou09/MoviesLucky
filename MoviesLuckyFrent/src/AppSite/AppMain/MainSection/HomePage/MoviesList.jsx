
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../../assets/Loading.css";
import axios from 'axios';
import { Button } from '@mui/material'; // Import Material UI button
import { useParams } from 'react-router-dom';

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    const [visibleItems, setVisibleItems] = useState(18); // Initially display 8 items

    // Load more function to show more items
    const loadMoreItems = () => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 12); // Load 8 more items
    };


    useEffect(() => {
      // Fetch movies from backend
      axios.get('http://127.0.0.1:8000/api/movies')
        .then(response => {
          setMovies(response.data.movies);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
          setLoading(false);
        });
    }, []);

// Display loading animation while fetching data
if (loading) {
    const loaders = Array.from({ length: 8 });
    return (
        <div className="container flex flex-col justify-center items-center mx-auto pt-28">
            <div className="flex flex-wrap mx-10 md:-mx-3 lx:-mx-28">
                {loaders.map((_, index) => (
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-3 mb-6"
                        key={index}
                    >
                        <div className="loader p-5 m-0 rounded">
                            <div className="wrapper">
                                <div className="circle"></div> {/* Placeholder for thumbnail */}
                                <div className="line-1"></div>  {/* Placeholder for title */}
                                <div className="line-2"></div>  {/* Placeholder for year */}
                                <div className="line-2"></div>  {/* Placeholder for HD */}
                                <div className="line-3"></div>  {/* Placeholder for rating */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



  return (
    <div className="container flex flex-col justify-center items-center mx-auto pt-28">
      <div className="flex flex-wrap -mx-3 px-5 lg:px-10">
        {movies.slice(0, visibleItems).map((data, index) => (
          <div key={index} className="w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 px-3 mb-6">
            <Link to={`/movie/${data.title}`} className="block relative overflow-hidden bg-gray-800 cursor-pointer rounded">
              {data.thumbnail ? (
                <img
                  src={data.thumbnail}
                  alt={data.href}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
              ) : (
                <img
                  src="/path-to-your-placeholder/no-image-available.png"
                  alt={data.href || data.title}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
              )}
              <div className="absolute bottom-0 left-0 w-full p-1 lg:p-3 bg-black bg-opacity-70 border-b-2 border-solid border-white rounded">
                <div className="text-white font-bold text-lg">{data.title}</div>
                <div className="flex flex-wrap mt-2">
                  <div className="flex items-center text-sm text-gray-400 mr-4">
                    <i className="bx bxs-star text-yellow-500 mr-1"></i>
                    <span>{data.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mr-4">
                    <span>HD</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>16+</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < movies.length && (
        <div className="after:h-px my-24 w-full flex items-center before:h-px before:flex-1 before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300 after:content-['']">
            <button
            type="button"
            onClick={loadMoreItems}
            className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-100"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4"
            >
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
                />
            </svg>
            View More
            </button>
        </div>
        )}


    </div>
  )
}

