<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Student extends Authenticatable
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

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function MmjorClass(): BelongsTo
    {
        return $this->belongsTo(MajorClass::class);
    }

    public function subjectClass(): BelongsTo
    {
        return $this->belongsTo(SubjectClass::class);
    }
}
