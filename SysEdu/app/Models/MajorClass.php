<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MajorClass extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'major_classes';
    protected $fillable = [
        'training_system',
        'name',
        'quantity',
        'status',
        'major_id',
        'employee_id',
    ];

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }

    public function hasRelations()
    {
        $relations = ['major', 'employee', 'students'];
        foreach ($relations as $relation) {
            if ($this->{$relation}()->exists()) {
                return true;
            }
        }
        return false;
    }

    public static function getByMajorId($major_id){
        return self::where('major_id', $major_id)->with('major', 'employee')->get();
    }

    public static function updateQuantity(){
        $majorClasses = self::all();
        foreach ($majorClasses as $majorClass) {
            $count = Student::where("major_class_id", $majorClass->id)->count();
            $majorClass->quantity = $count;
            $majorClass->save();
        }   
    }
}
