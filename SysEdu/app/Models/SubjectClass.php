<?php

namespace App\Models;

use App\Http\Middleware\TeacherMiddleware;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectClass extends Model
{
    use HasFactory;

    protected $table = 'subject_classes';

    protected $fillable = [
        'name',
        'quantity',
        'start_date',
        'end_date',
        'registration_deadline',
        'employee_id',
        'subject_id',
        'semester_id',
    ];

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function studentSubjectClasses()
    {
        return $this->hasMany(StudentSubjectClass::class);
    }
}
