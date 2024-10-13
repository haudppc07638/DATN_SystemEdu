<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rules\Exists;

class TimeSlot extends Model
{
    use HasFactory, ReusableModelTraits, SoftDeletes;

    protected $table = 'time_slots';
    protected $fillable = [
        'slot',
        'start_time',
        'end_time',
    ];

    public function schelules(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    public function hasRelations()
    {
        $relations = ['schelules'];
        foreach ($relations as $relation) {
            if ($this->{$relation}()->Exists()) {
                return true;
            }
            return false;
        }
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('slot', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }
}
