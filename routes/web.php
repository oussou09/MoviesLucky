<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AppSiteController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\StripeController;


// Route::get('/sanctum/csrf-cookie', function () {
//     return response()->json(['csrf_token' => csrf_token()]);
// });

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// require __DIR__.'/auth.php';

// // Auth routes
// Route::middleware('guest:user')->group(function () {
//     Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
//     Route::post('/login', [AuthController::class, 'loginreq'])->name('auth.login.req');
//     Route::get('/register', [AuthController::class, 'register'])->name('auth.register');
//     Route::post('/register', [AuthController::class, 'registereq'])->name('auth.register.req');
// });

// Route::middleware('auth:user')->group(function () {
//     Route::get('/profile/{id}', [AuthController::class, 'profile'])->name('auth.profile');
//     Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
// });

// // App Site routes
// Route::get('/', [AppSiteController::class, 'home'])->name('app.home');
// Route::get('/about', [AppSiteController::class, 'about'])->name('app.about');
// Route::get('/contact', [AppSiteController::class, 'contact'])->name('app.contact');
// Route::post('/contact', [AppSiteController::class, 'contactreq'])->name('app.contact.req');
// Route::get('/pricing', [AppSiteController::class, 'pricing'])->name('app.pricing');
// Route::get('/movies/{title}', [AppSiteController::class, 'showmovies'])->name('app.showmovies');

// // Movies routes (if needed)
// Route::get('/movies', [MoviesController::class, 'home'])->name('movies.home');

// // Stripe routes
// Route::get('/stripe/{price}', [StripeController::class, 'stripe'])->name('stripe.payment');
// Route::post('/stripe', [StripeController::class, 'stripeRequest'])->name('stripe.request');

