<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'departments';

    protected $fillable = [
        'name',
        'location',
        'deleted_at'
    ];

    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }

    public function hasRelations()
    {
        $relations = ['employees'];
        foreach ($relations as $relation) {
            if ($this->{$relation}()->exists()) {
                return true;
            }
        }
        return false;
    }

    public function scopeSearch($query, $searchTerm)
    {
        if($searchTerm){
            return $query->where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('location', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public static function getAllDepartment()
    {
        return self::all();
    }
}
