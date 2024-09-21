import React from 'react'
import Header from './Header'
import Pricing from './AppMain/MainSection/pricing/Pricing'
import MoviesList from './AppMain/MainSection/HomePage/MoviesList'

export default function MainApp() {
  return (
    <div className='h-auto'>
        <MoviesList />
        <Pricing />
    </div>
  )
}
