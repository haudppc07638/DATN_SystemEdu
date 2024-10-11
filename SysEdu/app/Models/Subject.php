<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'subjects';

    protected $fillable = [
        'name',
        'code',
        'credit',
        'price',
        'description',
        'major_id',
        'deleted_at'
    ];

    const CREDIT_PRICE = 250000;

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function subjectClasses(): HasMany
    {
        return $this->hasMany(SubjectClass::class);
    }

    public function hasRelations()
    {
        $relations = ['major', 'subjectClasses'];
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
        return $query->with(['major' => function ($query){
            $query->withTrashed();
        }]);
    }
}
