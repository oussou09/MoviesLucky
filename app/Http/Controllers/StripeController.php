<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Stripe\Charge;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function stripeRequest(Request $request)
    {
        Stripe::setApiKey(config('services.stripe.secret')); // Use your Stripe secret key

        try {
            // Check if user is authenticated
            if (Auth::check()) {
                // Get the token from the request
                $token = $request->input('stripeToken');
                $amount = intval($request->amount) * 100; // Amount in cents

                // Create the charge
                $charge = Charge::create([
                    'amount' => $amount,
                    'currency' => 'usd',
                    'source' => $token, // This is the Stripe token from frontend
                    'description' => 'Payment for subscription',
                ]);

                // Create a subscription record in the database
                $subscription = Subscription::create([
                    'user_id' => Auth::user()->id,
                    'type_subscription' => $request->input('subscriptionType') === 'Premium' ? 1 : 2,
                ]);

                // Return a success response
                return response()->json(['status' => 201, 'message' => 'Payment successful', 'data' => $subscription], 201);
            } else {
                return response()->json(['status' => 403, 'message' => 'User is not authenticated'], 403);
            }

        } catch (\Exception $ex) {
            return response()->json(['status' => 500, 'message' => $ex->getMessage()], 500);
        }
    }



}
