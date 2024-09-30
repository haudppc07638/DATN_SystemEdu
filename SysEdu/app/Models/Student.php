<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'full_name',
        'code',
        'email',
        'password',
        'phone',
        'image',
        'status',
        'major_id',
        'major_class_id',
    ];
}
