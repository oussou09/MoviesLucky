<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\Password;


class AuthController extends Controller
{

    public function loginreq(Request $request)
    {
      // Validate incoming request
      $credentials = $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
      ]);

      // Attempt login with the provided credentials
      if (Auth::attempt($credentials)) {
        $user = Auth::user();

        $token = $user->createToken('authToken', ['*'], now()->addMinutes(10080)); // Token expires in 60 minutes

        // Regenerate session ID to prevent session fixation attacks
        $request->session()->regenerate();

        // Return success message and token
        return response()->json([
          'message' => 'Login successful',
          'token' => $token->plainTextToken,
        ], 200);
      }

      // If login fails, return an error message
      return response()->json([
        'message' => 'Invalid credentials',
      ], 401);
    }

    public function registereq(Request $request)
    {

        $Ucreate = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', Password::min(8)],
        ]);


        $Ucreate['password'] = Hash::make($Ucreate['password']);

        User::create($Ucreate);
        return response()->json([
            'message' => 'user was created successfully',
            'status' => 201,
        ]);
    }


    public function user(Request $request)
    {
        if (Auth::check()) {
                    // Fetch the authenticated user with related data
            $user = Auth::user()->load(['subscription']); // Load related subscriptions and orders
            return response()->json(['user' => $user]);
        } else {
            // User is not authenticated
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function logout(Request $request)
    {
        $user = Auth::user(); // Get the authenticated user

        // Revoke all tokens associated with the user
        $user->tokens()->delete(); // Revoke all tokens for the user

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function StoreComments(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'title_movie' => 'required|string|max:255',
            'description' => 'required|string|max:500',
        ]);

        // Create the comment and associate it with the authenticated user
        $comment = Comment::create([
            'user_id' => auth()->id(), // Automatically get the authenticated user ID
            'title_movie' => $validated['title_movie'],
            'description' => $validated['description'],
        ]);

        // Return a success response
        return response()->json(['message' => 'Comment successfully stored!', 'comment' => $comment], 201);
    }

    public function getCommentsMovie($title)
    {
        try {
            // Fetch comments with the associated user
            $comments = Comment::whereRaw('LOWER(title_movie) = ?', [strtolower($title)])
                               ->with('user:id,firstName,lastName') // Include user data
                               ->get();

            return response()->json($comments, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching comments: '.$e->getMessage());

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
