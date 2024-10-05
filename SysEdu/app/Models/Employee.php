<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Employee extends Authenticatable
{
    use HasFactory;

    protected $table = 'employees';

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'phone',
        'image',
        'position',
        'is_active',
        'department_id'
    ];
}
