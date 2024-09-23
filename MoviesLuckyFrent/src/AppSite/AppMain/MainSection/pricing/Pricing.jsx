import React, { useContext, useEffect, useState } from 'react'
import ButtonHover from './ButtonHover'
import { useLocation } from 'react-router-dom'; // Ensure this is imported




export default function Pricing() {

    const [pageStyleDiv1, setPagestyleDiv1] = useState('')
    const [pageStyleDiv2, setPagestyleDiv2] = useState('')
    const location = useLocation(); // Get the current location


    useEffect(() => {

        if (location.pathname === '/pricing') {
            setPagestyleDiv1('pt-[155px] pb-20 md:pb-0 bg-[#181616] flex justify-start items-center')
            setPagestyleDiv2('container mx-auto max-w-screen-xl px-4 h-auto md:h-[76vh] ')
        }
        else{
            setPagestyleDiv1('pt-10 pb-20 bg-[#181616] flex justify-start items-center')
            setPagestyleDiv2('container mx-auto max-w-screen-xl px-4')
        }

      }, [location.pathname]);

  return (
    <div className={pageStyleDiv1}>
    <div className={pageStyleDiv2}>
      <div className="text-center mb-10">
        <h1 className="text-4xl text-white font-bold">
          <span className="text-[#1f83ed]">M</span>ovies<span className="text-[#1f83ed]">L</span>ucky Pricing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-[#221f1f] text-white p-8 rounded-lg hover:transform hover:-translate-y-1 transition">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Basic</h2>
            <p className="text-lg mt-2">Free</p>
          </div>
          <ul className="mb-6 space-y-2 text-center">
            <li>Originals</li>
            <li>Switch plans anytime</li>
            <li><del>65+ top Live</del></li>
            <li><del>TV Channels</del></li>
            <li><del>4K Video Quality</del></li>
          </ul>
          <div className="text-center">
            <ButtonHover text="Register now" link="/register" />
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#221f1f] text-white p-8 rounded-lg border-4 border-[#1f83ed] hover:transform hover:-translate-y-1 transition">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">Premium</h2>
            <p className="text-lg mt-2">$14.99 <span>/month</span></p>
          </div>
          <ul className="mb-6 space-y-2 text-center">
            <li>Originals</li>
            <li>Switch plans anytime</li>
            <li>Full HD Video Quality</li>
            <li>65+ top Live Channels</li>
            <li><del>TV Channels</del></li>
          </ul>
          <div className="text-center">
                <ButtonHover text="Register now" link={`/payment/14.99/Premium`} />
          </div>
        </div>

        {/* VIP Plan */}
        <div className="bg-[#221f1f] text-white p-8 rounded-lg hover:transform hover:-translate-y-1 transition">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">VIP</h2>
            <p className="text-lg mt-2">$34.99 <span>/month</span></p>
          </div>
          <ul className="mb-6 space-y-2 text-center">
            <li>Originals</li>
            <li>Switch plans anytime</li>
            <li>65+ top Live Channels</li>
            <li>TV Channels</li>
            <li>4K Video Quality</li>
          </ul>
          <div className="text-center">
                <ButtonHover text="Register now" link={`/payment/34.99/VIP`} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
