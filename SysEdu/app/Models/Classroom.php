<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory, ReusableModelTraits;

    protected $table = 'classrooms';
    protected $fillable = [
        'code',
    ];

    public function scopeSearch($query, $searchTerm)
    {
        if($searchTerm){
            return $query->where('code', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }
}
