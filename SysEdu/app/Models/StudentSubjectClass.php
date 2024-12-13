<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSubjectClass extends Model
{
    use HasFactory;

    protected $table = 'student_subject_classes';

    protected $fillable = [
        'midterm_score',
        'final_score',
        'total_score',
        'classification',
        'status',
        'tuition_status',
        'student_id',
        'subject_class_id',
    ];

    public function subjectClass()
    {
        return $this->belongsTo(SubjectClass::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
}
