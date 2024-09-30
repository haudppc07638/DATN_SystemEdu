<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MajorClass extends Model
{
    use HasFactory;

    protected $table = 'major_classes';
    protected $fillable = [
        'training_system',
        'name',
        'quantity',
        'major_id',
        'employee_id',
    ];
}
