import React, { useContext, useEffect, useState } from 'react';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '../../../utils/AuthContext';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of browserHistory



const StripePayment = () => {
    const { MountSub, Type } = useParams(); // Get the price and type from the URL
    const stripe = useStripe();
    const elements = useElements();
    const { user, authenticated, loading } = useContext(AuthContext); // Use loading from context
    const [users, setUsers] = useState(null);
    const navigate = useNavigate();  // Initialize the navigate hook



    useEffect(() => {
        console.log(authenticated)
        if (user && authenticated) {
          setUsers(user);
        }
      }, [user, authenticated]);


    const onSubmit = async () => {
        if (!stripe || !elements) return; // Ensure Stripe is loaded

        const cardNumberElement = elements.getElement(CardNumberElement);
        const { token, error } = await stripe.createToken(cardNumberElement);

        if (error) {
          console.error(error.message);
        } else {
          stripeTokenHandler(token);
        }
      };

  const stripeTokenHandler = async (token) => {
    console.log(token)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          Authorization: `Bearer ${Cookies.get('auth_token')}`,
        },
        body: JSON.stringify({
            token: token.id, // Send token ID
            amount: MountSub,
            subscriptionType: Type
          }),
      });

      const data = await response.json();
      if (data.status === 201) {
        console.log('Payment successful!', data);
      } else {
        console.error('Payment failed.', data);
      }
    } catch (error) {
      console.error('An error occurred while processing your payment.', error);
    }
  };

  if (!authenticated) {
    navigate('/login'); // Redirect to the desired route

  }

  // Display loading indicator while fetching data
  if (loading) {
    return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
    {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4"> */}
        <div className="bg-white p-4 ring-1 ring-zinc-900/5 rounded-lg shadow-lg w-[50%]">
            <div className="flex-col space-y-4 animate-pulse">
            <div className="rounded-full bg-zinc-300 w-1/4 aspect-square mx-auto"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-zinc-300 rounded"></div>
                <div className="h-2 bg-zinc-300 w-3/4 rounded"></div>
                <div className="h-6 bg-zinc-300 w-20 mx-auto rounded"></div>
            </div>
            </div>
        </div>
    {/* </div> */}
</div>

    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Stripe Payment Gateway</h1>

        <form id="payment-form" onSubmit={onSubmit} className="space-y-6">
          {/* Amount Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Amount:</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              type="text"
              value={`$${MountSub}`} // Dynamically set the amount from URL
              readOnly
            />
          </div>


          {/* Name on Card */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name on Card</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
              placeholder="Name on Card"
              required
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Card Number</label>
            <CardNumberElement
              className="w-full p-3 border border-gray-300 rounded-md"
              options={{
                style: { base: { fontSize: '16px', color: '#32325d' } },
              }}
            />
          </div>

          {/* CVC and Expiration */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">CVC</label>
              <CardCvcElement
                className="w-full p-3 border border-gray-300 rounded-md"
                options={{
                  style: { base: { fontSize: '16px', color: '#32325d' } },
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Expiration</label>
              <CardExpiryElement
                className="w-full p-3 border border-gray-300 rounded-md"
                options={{
                  style: { base: { fontSize: '16px', color: '#32325d' } },
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!stripe}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Pay ${MountSub}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StripePayment;






