<?php
use App\Http\Controllers\AppSiteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StripeController;
use Illuminate\Support\Facades\Route;

Route::get('/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});

// Home Route
Route::post('/contact-data', [AppSiteController::class, 'contactreq']);
Route::get('/movies', [AppSiteController::class, 'home']);
Route::get('/movie/{title}', [AppSiteController::class, 'MovieDetails']);

// Auth route
Route::post('/register', [AuthController::class, 'registereq']);
Route::post('/login', [AuthController::class, 'loginreq']);
Route::get('/Comments/{title}', [AuthController::class, 'getCommentsMovie']);

// Payment route

// Unauthorized route
Route::middleware(['auth:sanctum', 'authUser'])->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    // Route::post('/refresh-token', [AuthController::class, 'refreshToken']);
    Route::post('/Comments', [AuthController::class, 'StoreComments']);
    Route::post('/stripe', [StripeController::class, 'stripeRequest']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
