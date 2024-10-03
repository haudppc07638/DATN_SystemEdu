<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Faculty extends Model
{
    use HasFactory, ReusableModelTraits;

    protected $table = 'faculties';

    protected $fillable = [
        'name',
        'code',
        'dean',
        'assistant_dean',
        'description',
        'is_active',
    ];

    public function majors(): HasMany
    {
        return $this->hasMany(Major::class);
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('code', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    static public function getFacultiesActive()
    {
        return Faculty::active()->get();
    }
}
