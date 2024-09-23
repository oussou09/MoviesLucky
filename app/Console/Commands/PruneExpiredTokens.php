<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laravel\Sanctum\PersonalAccessToken;
use Carbon\Carbon;

class PruneExpiredTokens extends Command
{
    protected $signature = 'tokens:prune';

    protected $description = 'Remove expired tokens from the personal_access_tokens table';

    public function handle()
    {
        // Delete tokens where the `expires_at` date is in the past
        PersonalAccessToken::where('expires_at', '<', Carbon::now())->delete();

        $this->info('Expired tokens pruned successfully!');
    }
}

