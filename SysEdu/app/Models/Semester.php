<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Semester extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'semesters';

    protected $fillable = [
        'block',
        'year',
        'start_date',
        'end_date',
    ] ;

    public function subjectClasses():HasMany
    {
        return $this->hasMany(SubjectClass::class);
    }

    public function hasRelations()
    {
        $relations = ['subjectClasses'];
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
            return $query->where('block', 'like', '%' . $searchTerm . '%')
            ->orWhere('year', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }


}
