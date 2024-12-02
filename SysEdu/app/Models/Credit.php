<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Credit extends Model
{
    use HasFactory, ReusableModelTraits;
    protected $fillable = [
        'price',
    ];
    public function subjectClasses(): HasMany
    {
        return $this->hasMany(SubjectClass::class);
    }
    public static function getAllCredit()
    {
        return self::all();
    }
    public static function createCredit($data)
    {
        $data['vat'] = $data['vat'] ?? 0;

        $totalPrice = $data['price'] + ($data['price'] * $data['vat'] / 100);

        $data['total_price'] = $totalPrice;
        return self::create($data);
    }
    public static function getCreditID($id)
    {
        return self::findOrFail($id);
    }
    public function getVatAmountAttribute()
    {
        return $this->price * ($this->vat / 100);
    }
    public static function updateCredit($id, $data)
    {
        $data['price'] = str_replace(',', '', $data['price']);
        return self::findOrFail($id)
            ->update($data);
    }
    public function getTotalPriceAttribute()
    {
        return $this->price + ($this->price * $this->vat / 100);
    }
    public static function getPriceCredit()
    {
        return self::select('id', 'total_price')
            ->get();
    }

    public function scopeSearch($query, $searchTerm)
    {
        if ($searchTerm) {
            return $query->where('price', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function hasRelations()
    {
        $relations = ['subjectClasses'];
        foreach ($relations as $relation) {
            if ($this->{$relation}()->exists()) {
                return true;
            }
        }
        return false;
    }
}
