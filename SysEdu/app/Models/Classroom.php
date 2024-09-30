<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

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

    public function scopeLatestPaginate($query, $limit = 10)
    {
        return $query->latest()->paginate($limit);
    }
}
