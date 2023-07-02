<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
<<<<<<< HEAD
use Illuminate\Database\Eloquent\Model;
=======

>>>>>>> origin/devep

class User extends Model
{
    use HasFactory;

<<<<<<< HEAD

=======
    public $timestamps = false;
>>>>>>> origin/devep
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'nameUser',
        'email',
        'password',
<<<<<<< HEAD
        'cp',
=======
>>>>>>> origin/devep
        'phone',
        'typeUser'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
