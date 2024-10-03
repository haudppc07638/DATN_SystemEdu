<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait ReusableModelTraits
{
    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }

    public function softDelete()
    {
        $this->is_active = 0;
        $this->save();
    }

    public function scopeLatestPaginate(Builder $query, $limit = 10)
    {
        return $query->latest()->paginate($limit);
    }
}
