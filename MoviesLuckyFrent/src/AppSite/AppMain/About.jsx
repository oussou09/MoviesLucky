import React from 'react'
import backgroundAuth from '../../assets/imgs/background-auth.jpeg'

export default function about() {
  return (
    <div className='bg-custom-gray-0.9'>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${backgroundAuth})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl uppercase font-light text-center shadow-md">About Us</h1>
          <p className="text-3xl md:text-4xl mt-2 shadow-md">20+ Years of Experience</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-6">
        <section className="text-center mb-16">
          <p className="text-blue-500 font-bold uppercase">About Us</p>
          <p className="text-lg text-gray-600 mt-4">Welcome to MoviesLucky</p>
        </section>

        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-film"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Our Services</h3>
              <p className="text-white">MoviesLucky is your go-to destination for all things movies. From the latest blockbusters to timeless classics, we provide a comprehensive movie experience.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-video"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Movie Database</h3>
              <p className="text-white">Discover an extensive collection of movies across all genres. Whether youre a fan of action, drama, comedy, or horror, MoviesLucky has something for everyone.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-volume-up"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Movie Reviews</h3>
              <p className="text-white">Get detailed reviews and ratings for all your favorite movies. Our team of experienced critics provides insightful analysis to help you decide what to watch next.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-bolt"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Trailers and Clips</h3>
              <p className="text-white">Watch the latest trailers and exclusive clips from upcoming movies. Stay updated with sneak peeks and behind-the-scenes footage.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Showtimes and Tickets</h3>
              <p className="text-white">Find showtimes and purchase tickets for movies playing in theaters near you. With MoviesLucky, you can easily plan your next movie night out.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-paint-brush"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Streaming Services</h3>
              <p className="text-white">Explore our curated list of movies available on popular streaming platforms. We provide direct links to help you find where to watch your favorite films online.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-ship"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Editorial Content</h3>
              <p className="text-white">Read engaging articles, interviews, and features about the movie industry. Our editorial team covers everything from celebrity news to deep dives into movie history.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Movie Merchandise</h3>
              <p className="text-white">Shop for official movie merchandise, including posters, apparel, and collectibles. MoviesLucky offers a wide range of products for movie enthusiasts of all ages.</p>
            </div>
          </div>

          <div className="shadow-lg p-5 flex items-center">
            <div className="text-blue-500 text-5xl pr-8">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-2xl font-bold">Conventions and Events</h3>
              <p className="text-white">Stay informed about upcoming movie conventions and events. MoviesLucky provides details on film festivals, fan conventions, and exclusive movie screenings.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
