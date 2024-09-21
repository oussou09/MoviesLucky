<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Subscription extends Model
{
    use HasFactory;

    protected $table = 'subscription';

    protected $fillable = [
        'user_id',
        'type_subscription',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function getRemainingDaysAttribute()
    {
        $endDate = $this->created_at->copy()->addDays(30);
        return Carbon::now()->diffInDays($endDate, false);
    }
}
