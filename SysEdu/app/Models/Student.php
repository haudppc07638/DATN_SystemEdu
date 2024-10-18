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
            return $query->where('full_name', 'like', '%' . $searchTerm . '%')
            ->orWhere('code', 'like', '%' . $searchTerm . '%')
            ->orWhere('email', 'like', '%' . $searchTerm . '%')
            ->orWhereHas('major', function ($subQuery) use ($searchTerm) {
                $subQuery->where('name', 'like', '%' . $searchTerm . '%');
            })
            ->orWhereHas('majorClass', function ($subQuery) use ($searchTerm) {
                $subQuery->where('name', 'like', '%' . $searchTerm . '%');
            });
        }
        return $query;
    }

    public function scopeWithMajorAndMajorClass($query)
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

    public static function getStudentInMajorClass($major_Class_id){
        return self::where("major_Class_id", $major_Class_id)->get();
    }
    
}
