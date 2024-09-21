<?php

namespace App\Console;

use App\Console\Commands\ClearAllCaches;
use App\Console\Commands\RemoveExpiredTokens;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule)
    {
        // Run the 'inspire' command every hour
        $schedule->command('inspire')->hourly();

        // Run your custom 'tokens:remove-expired' command every hour
        // $schedule->command('tokens:remove-expired')->hourly();

        $schedule->command('tokens:remove-expired')->everyMinute();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands()
    {
        // Automatically register commands in the app/Console/Commands directory
        $this->load(__DIR__.'/Commands');
        // Manually register custom commands if needed
        require base_path('routes/console.php');

        // Register additional commands here if needed
        $this->commands([
            ClearAllCaches::class,
            RemoveExpiredTokens::class,
        ]);
    }
}
