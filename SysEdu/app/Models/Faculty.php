<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

    protected $table = 'faculties';

    protected $fillable = [
        'name',
        'code',
        'dean',
        'assistant_dean',
        'description',
        'is_active',
    ];

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('code', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function scopeLatestPaginate($query, $limit = 10)
    {
        return $query->latest()->paginate($limit);
    }

    public function softDelete()
    {
        $this->is_active = 0;
        $this->save();
    }
}
