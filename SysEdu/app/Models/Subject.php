<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subject extends Model
{
    use HasFactory, ReusableModelTraits;

    protected $table = 'subjects';

    protected $fillable = [
        'name',
        'code',
        'credit',
        'price',
        'description',
        'is_active',
        'major_id',
    ];

    const CREDIT_PRICE = 250000;

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('name', 'like', '%' . $searchTerm . '%')
                ->orWhere('code', 'LIKE', '%' . $searchTerm . '%')
                ->orWhere('description', 'LIKE', '%' . $searchTerm . '%')
                ->orWhereHas('major', function ($subQuery) use ($searchTerm) {
                    $subQuery->where('name', 'like', '%' . $searchTerm . '%');
                });
        }
        return $query;
    }

    public function scopeWithMajor($query)
    {
        return $query->with('major');
    }
}
