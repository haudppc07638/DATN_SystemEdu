<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Authenticatable
{
    use HasFactory, ReusableModelTraits;

    protected $table = 'employees';

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'phone',
        'image',
        'position',
        'faculty_id',
        'department_id',
        'deleted_at'
    ];

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function classes(): HasMany
    {
        return $this->hasMany(MajorClass::class);
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    public function subjectClasses(): HasMany
    {
        return $this->hasMany(SubjectClass::class);
    }

    public function hasRelations(){
        $relations = ['faculty', 'department', 'classes', 'notifications', 'subjectClasses'];
        foreach ($relations as $relation) {
            if ($this->{$relation}()->exists()) {
                return true;
            }
        }
        return false;
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('full_name', 'like', '%' . $searchTerm . '%')
                ->orWhere('email', 'like', '%' . $searchTerm . '%')
                ->orWhere('phone', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function scopeWithFacultyAndDepartment($query)
    {
        return $query->with([
            'faculty' => function ($query) {
                $query->withTrashed();
            },
            'department' => function ($query) {
                $query->withTrashed();
            },
        ]);
    }
}
