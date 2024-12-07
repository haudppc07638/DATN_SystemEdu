<?php

namespace App\Models;

use App\Traits\ReusableModelTraits;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Authenticatable
{
    use HasFactory, ReusableModelTraits;

    protected $table = 'employees';

    protected $fillable = [
        'full_name',
        'email',
        'code',
        'phone',
        'image',
        'position',
        'gender',
        'major_id',
        'department_id',
        'nation',
        'educational_level',
        'provice_city',
        'district',
        'commune_level',
        'identity_card',
        'card_issuance_date',
        'card_location',
        'house_number',
        'date_of_birth',
        'year_graduation',
        'graduate',
    ];

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function classes(): HasMany
    {
        return $this->hasMany(MajorClass::class);
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    public function subjectClasses(): HasMany
    {
        return $this->hasMany(SubjectClass::class);
    }

    public function subjectLecturers(): HasMany
    {
        return $this->hasMany(SubjectLecturer::class);
    }

    public function hasRelations()
    {
        $relations = ['major', 'department', 'classes', 'notifications', 'subjectClasses'];
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
            return $query->where('full_name', 'like', '%' . $searchTerm . '%')
                ->orWhere('email', 'like', '%' . $searchTerm . '%')
                ->orWhere('phone', 'like', '%' . $searchTerm . '%');
        }
        return $query;
    }

    public function scopeWithMajorAndDepartment($query)
    {
        return $query->with([
            'major' => function ($query) {
                $query->withTrashed();
            },
            'department' => function ($query) {
                $query->withTrashed();
            },
        ]);
    }

    public static function getAvailableTeachers($faculty_id)
    {
        return self::where('position', 'teacher')
            ->where('faculty_id', $faculty_id)
            ->whereDoesntHave('classes', function ($query) {
                $query->where('status', 0);
            })
            ->get();
    }
}
