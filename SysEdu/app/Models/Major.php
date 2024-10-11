<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Major extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'majors';

    protected $fillable = [
        'name',
        'faculty_id',
        'deleted_at'
    ];

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function classes(): HasMany
    {
        return $this->hasMany(MajorClass::class);
    }

    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }

    public function hasRelations()
    {
        $relations = ['faculty', 'subjects', 'classes', 'students'];
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
            return $query->where('name', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function scopeWithFaculty($query)
    {
        return $query->with(['faculty' => function ($query) {
            $query->withTrashed();
        }]);
    }
}
