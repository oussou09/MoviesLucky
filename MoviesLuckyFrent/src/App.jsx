import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './AppSite/Header'
import About from './AppSite/AppMain/About'
import Contact from './AppSite/AppMain/Contact'
import Footer from './AppSite/Footer'
import NotFound from './AppSite/NotFound'
import MainApp from './AppSite/MainApp';
import StripePayment from './AppSite/AppMain/MainSection/pricing/StripePayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import FromLogin from './AppSite/AppMain/MainSection/AuthForms/FromLogin';
import FromRegister from './AppSite/AppMain/MainSection/AuthForms/FromRegister';
import MovieDetails from './AppSite/AppMain/MainSection/HomePage/MovieDetails';
import CommantMovieDetails from './AppSite/AppMain/MainSection/HomePage/CommantMovieDetails';
import AuthRedirect from './AppSite/utils/UserRouteCheck';
import Profile from './AppSite/AppMain/MainSection/AuthForms/Profile';
import { AuthProvider } from './AppSite/utils/AuthContext'; // Import AuthProvider
import Pricing from './AppSite/AppMain/MainSection/pricing/Pricing';




function App() {

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


  return (
    <>
    <div className='bg-[#181616]'>
    <AuthProvider>
    <Router>
        <Routes>
            {/* Routes with Header and Footer */}
            <Route
                path="/"
                element={
                        <>
                            <Header />
                            <MainApp />
                            <Footer />
                        </>
                    } />
            <Route
                path="/contact"
                element={
                        <>
                            <Header />
                            <Contact />
                            <Footer />
                        </>
                    } />
            <Route
                path="/about"
                element={
                        <>
                            <Header />
                            <About />
                            <Footer />
                        </>
                    } />
            <Route
                path="/pricing"
                element={
                        <>
                            <Header />
                            <Pricing />
                            <Footer />
                        </>
                    } />
            <Route
                path="/movie/:title"
                element={
                        <>
                            <Header />
                            <MovieDetails />
                            <CommantMovieDetails />
                            <Footer />
                        </>
                    } />
            <Route
                path="/payment/:MountSub/:Type"
                element={
                        <>
                            <Header />
                            <Elements stripe={stripePromise}>
                                <StripePayment />
                            </Elements>
                            <Footer />
                        </>
                    } />

            {/* route without Footer */}
            <Route path="/login" element={
                <AuthRedirect>
                    <><Header /><FromLogin /></>
                </AuthRedirect>}
            />
            <Route path="/register" element={
                <AuthRedirect>
                    <><Header /><FromRegister /></>
                </AuthRedirect>}
            />

            <Route
                path="/profile/:id"
                element={
                    <>
                        <Header />
                        <Profile />
                        <Footer />
                    </>
                } />



            {/* 404 Route with Header and Footer */}
            <Route
                path="*"
                element={
                        <>
                            <Header />
                            <NotFound />
                            <Footer />
                        </>
                    } />

        </Routes>
    </Router>
    </AuthProvider>

    </div>
    </>
  )
}

export default App
