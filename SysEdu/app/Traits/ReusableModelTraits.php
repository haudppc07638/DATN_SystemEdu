<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait ReusableModelTraits
{
    public function scopeLatestPaginate(Builder $query, $limit = 10)
    {
        return $query->latest()->paginate($limit);
    }
}
