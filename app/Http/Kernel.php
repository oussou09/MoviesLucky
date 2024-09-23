<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use \App\Http\Middleware\AuthUser;
use App\Console\Commands\PruneExpiredTokens;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * @var array
     */
    protected $middleware = [
        // Other global middleware
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            \App\Http\Middleware\HandleCors::class,  // Ensure CORS is applied here
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            \App\Http\Middleware\HandleCors::class,  // Ensure CORS is applied here
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * @var array
     */
    protected $routeMiddleware = [
        // Other route middleware
        'authUser' => AuthUser::class,
    ];

    protected $commands = [
        PruneExpiredTokens::class,
    ];
}
