<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Classroom extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'classrooms';
    protected $fillable = [
        'code',
        'deleted_at'
    ];

    public function schedule(): BelongsTo{
        return $this->belongsTo(Schedule::class);
    }

    public function hasRelations()
    {
        $relations = ['schedule'];
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
            return $query->where('code', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }
}
