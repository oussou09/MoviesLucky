<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Stripe\Charge;
use Stripe\Stripe;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Log;


class StripeController extends Controller
{
    public function stripeRequest(Request $request)
    {
        Log::info('Stripe request data:', $request->all());
        // Set the Stripe API key
        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            // Check if the user is authenticated
            if (!Auth::guard('user')->check()) {

                try {
                    // Create a charge with Stripe
                    Charge::create([
                        'amount' => $request->price * 100, // Amount in cents
                        'currency' => 'usd',
                        'source' => $request->stripeToken,
                        'description' => 'Payment description',
                    ]);

                    // Create a subscription record
                    $SubData = [
                        'user_id' => Auth::guard('user')->user()->id, // User ID for the subscription
                        'type_subscription' => $request->price === 14.99 ? 1 : 2 // Subscription type
                    ];
                    Subscription::create($SubData);

                    // Return a success response
                    return response()->json([
                        'message' => 'Your Subscription ' . $SubData['type_subscription'] . ' has been added successfully.',
                        'status' => 201,
                    ]);

                } catch (\Exception $ex) {
                    // Handle payment errors
                    return response()->json([
                        'message' => 'Payment failed: ' . $ex->getMessage(),
                        'status' => 502,
                    ]);
                }

            } else {
                // Handle logic for authenticated users here
                // You might want to charge the user or update their subscription
                return response()->json([
                    'message' => 'Authenticated users not supported yet.',
                    'status' => 400,
                ]);
            }

        } catch (\Exception $ex) {
            // Handle other errors
            return response()->json([
                'message' => 'An error occurred: ' . $ex->getMessage(),
                'status' => 500,
            ]);
        }
    }


}
