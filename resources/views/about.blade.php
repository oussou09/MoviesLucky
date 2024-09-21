@extends('app')

@section('style')
    <link href="{{ asset('asset\css\about.css') }}" rel="stylesheet">
@endsection

@section('content')

<div class="hero-image-about">
    <!-- Edit Banner Text -->
    <div class="hero-text">
        <h1>About Us</h1>
        <p class="hero-subtitle">20+ Years of Experience</p>
    </div>
    <!-- END Banner Text -->
</div>

<article class="main">
    <section class="content">
        <!-- Edit Homepage Text -->
        <p class="blue-text"><strong>ABOUT US</strong></p>
        <p id="text"> Welcome to MoviesLucky</p>
        <!-- END Homepage Text -->
    </section>
    <div id="services">
        <section class="grid-services">
              <!-- Edit Services Section -->
              <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i style=" color: #12a8e1;" class="fas fa-film"></i>
                    </div>
                    <div class="services-description">
                    <!-- Edit Video Section -->
                        <h3>Our Services</h3>
                        <p>MoviesLucky is your go-to destination for all things movies. From the latest blockbusters to timeless classics, we provide a comprehensive movie experience.</p>
                    <!-- END Video Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="services-description">
                    <!-- Edit Video Section -->
                        <h3>Movie Database</h3>
                        <p>Discover an extensive collection of movies across all genres. Whether you're a fan of action, drama, comedy, or horror, MoviesLucky has something for everyone. Our database is regularly updated to ensure you have access to the newest releases and hidden gems.</p>
                    <!-- END Video Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-volume-up"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Audio Section -->
                        <h3>Movie Reviews</h3>
                        <p>Get detailed reviews and ratings for all your favorite movies. Our team of experienced critics provides insightful analysis to help you decide what to watch next. Join the conversation and share your own reviews with the MoviesLucky community.</p>
                        <!-- END Audio Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Lighting Section -->
                        <h3>Trailers and Clips</h3>
                        <p>Watch the latest trailers and exclusive clips from upcoming movies. Stay updated with sneak peeks and behind-the-scenes footage that you won't find anywhere else.</p>
                        <!-- END Lighting Section -->
                    </div>
                </div>
            </div>
             <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-pencil-ruler"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Scenic Design Section -->
                        <h3>Showtimes and Tickets</h3>
                        <p>Find showtimes and purchase tickets for movies playing in theaters near you. With MoviesLucky, you can easily plan your next movie night out.</p>
                        <!-- END Scenic Design Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Creative Services Section -->
                        <h3>Streaming Services</h3>
                        <p>Explore our curated list of movies available on popular streaming platforms. We provide direct links to help you find where to watch your favorite films online.</p>
                        <!-- END Creative Services Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i class="fas fa-ship"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Conventions Section -->
                        <h3>Editorial Content</h3>
                        <p>Read engaging articles, interviews, and features about the movie industry. Our editorial team covers everything from celebrity news to deep dives into movie history and trends.</p>
                        <!-- END Conventions Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i style=" color: #12a8e1;" class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Conventions Section -->
                        <h3>Movie Merchandise</h3>
                        <p>Shop for official movie merchandise, including posters, apparel, and collectibles. MoviesLucky offers a wide range of products for movie enthusiasts of all ages.</p>
                        <!-- END Conventions Section -->
                    </div>
                </div>
            </div>
            <div class="grid-group-services">
                <div class="grid-group-services-box">
                    <div class="services-icon">
                        <i style=" color: #12a8e1;" class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="services-description">
                        <!-- Edit Conventions Section -->
                        <h3>Conventions and Events</h3>
                        <p>Stay informed about upcoming movie conventions and events. MoviesLucky provides details on film festivals, fan conventions, and exclusive movie screenings.</p>
                        <!-- END Conventions Section -->
                    </div>
                </div>
            </div>
        </section>
        <!-- END Services Section -->
    </div>
</article>

@endsection
