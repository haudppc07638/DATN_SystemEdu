<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Faculty extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'faculties';

    protected $fillable = [
        'name',
        'code',
        'dean',
        'assistant_dean',
        'description',
        'deleted_at'
    ];

    public function majors(): HasMany
    {
        return $this->hasMany(Major::class);
    }

    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }

    public function hasRelations()
    {
        $relations = ['majors', 'employees'];
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
            return $query->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('code', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public static function getFaculties()
    {
        return self::all();
    }
}
