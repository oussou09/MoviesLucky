<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table = 'comments';

    protected $fillable = [
        'user_id',
        'title_movie',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class); // This links the comment to the user who made it
    }
}
