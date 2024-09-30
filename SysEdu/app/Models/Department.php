<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $table = 'departments';

    protected $fillable = [
        'name',
        'location',
    ];

    public function scopeSearch($query, $searchTerm)
    {
        if($searchTerm){
            return $query->where('name', 'like', '%' . $searchTerm . '%')
            ->orWhere('location', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function scopeLatestPaginate($query, $limit = 10)
    {
        return $query->latest()->paginate($limit);
    }
}
