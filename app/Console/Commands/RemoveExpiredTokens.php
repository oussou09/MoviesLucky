<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RemoveExpiredTokens extends Command
{
    protected $signature = 'tokens:remove-expired';
    protected $description = 'Remove expired personal access tokens';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // Get expired tokens
        $expiredTokens = DB::table('personal_access_tokens')
            ->where('expires_at', '<', Carbon::now())
            ->pluck('token') // Assuming 'token' is the field that represents the token value
            ->toArray();

        // Delete tokens that are expired
        DB::table('personal_access_tokens')
            ->where('expires_at', '<', Carbon::now())
            ->delete();

        // Log or return the expired tokens
        if (!empty($expiredTokens)) {
            Log::info('Expired tokens have been removed:', $expiredTokens);
            // You could also return them if you implement a notification system
        }

        $this->info('Expired tokens have been removed.');
    }
}

