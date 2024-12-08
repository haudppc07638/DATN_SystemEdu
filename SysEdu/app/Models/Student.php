<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Authenticatable
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

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

    public function majorClass(): BelongsTo 
    {
        return $this->belongsTo(MajorClass::class);
    }

    public function subjectClass(): BelongsTo
    {
        return $this->belongsTo(SubjectClass::class);
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where(function($query) use ($searchTerm) {
                $query->where('full_name', 'like', '%' . $searchTerm . '%')
                    ->orWhere('code', 'like', '%' . $searchTerm . '%')
                    ->orWhere('email', 'like', '%' . $searchTerm . '%')
                    ->orWhere('phone', 'like', '%' . $searchTerm . '%');
            });
        }
        return $query;
    }

    public function scopeWithRelations($query)
    {
        return $query->with([
            'major' => function ($query) {
                $query->withTrashed();
            },
            'majorClass' => function ($query) {
                $query->withTrashed();
            },
        ]);
    }

    public function scopeGetStudentsByMajorClass($query, $majorClassId)
    {
        return $query->where('major_class_id', $majorClassId);
    }
}
