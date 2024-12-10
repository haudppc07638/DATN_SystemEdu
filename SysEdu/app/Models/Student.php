<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOneOrManyThrough;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Validator;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Carbon\Carbon;
use App\Models\Major;
use App\Models\SubjectClass;
use App\Models\StudentSubjectClass;
use App\Models\TotalTuition;
use App\Models\Tuition;
use App\Models\Feedback;

class Student extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'students';

    protected $fillable = [
        'full_name',
        'date_of_birth',
        'gender',
        'nation',
        'email',
        'code',
        'phone',
        'image',
        'identity_card',
        'card_issuance_date',
        'card_location',
        'provice_city',
        'district',
        'commune_level',
        'house_number',
        'sponsor_name',
        'sponsor_phone',
        'major_id',
        'major_class_id',
    ];
    public function isStudent()
    {
        return true;
    }

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function stuClass(): BelongsTo
    {
        return $this->belongsTo(StudentSubjectClass::class, 'major_class_id');
    }

    public function subjectClass(): BelongsTo
    {
        return $this->belongsTo(SubjectClass::class);
    }
    public function totalTuition(): HasMany
    {
        return $this->hasMany(TotalTuition::class);
    }
    public function studentSubjectClasses(): HasMany
    {
        return $this->hasMany(StudentSubjectClass::class, 'student_id');
    }
    public function tuition(): HasOneOrManyThrough
    {
        return $this->hasOneThrough(
            Tuition::class,
            StudentSubjectClass::class,
            'student_id',
            'student_subject_class_id',
            'id',
            'id',
        );
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public static function getStudentsByMajors($id)
    {
        return self::whereIn('major_id', $id)
            ->get();
    }

    public static function getAllStudents($perPage = 20)
    {
        return self::with(['major', 'stuClass'])->orderBy('id', 'desc')->paginate($perPage);
    }

    public static function getStudentsForCreate()
    {
        return [
            'majors' => Major::select('id', 'name')->get(),
            'classes' => StudentSubjectClass::select('id', 'name')->get(),
        ];
    }

    public static function getStudentsForEdit()
    {
        return [
            'majors' => Major::select('id', 'name')->get(),
            'classes' => StudentSubjectClass::select('id', 'name')->get(),
        ];
    }
    public static function getCurrentSemesterRegisteredClasses($studentId)
    {
    return StudentSubjectClass::where('student_id', $studentId)
        ->whereHas('subjectClass.semester', function ($query) {
            $query->where('start_date', '<=', now())
                  ->where('end_date', '>=', now());
        })->get();
    }

    public static function validate($data, $request)
    {
        $rules = $request->rules();

        $messages = $request->messages();

        return Validator::make($data, $rules, $messages);
    }

    public static function createStudent($data)
    {
        $data['code'] = self::generateStudentCode();
        return self::create($data);
    }

    public static function findStudentById($id)
    {
        return self::findOrFail($id);
    }

    public static function updateStudent($id, $data)
    {
        $student = self::findOrFail($id);
        $student->update($data);
        return $student;
    }

    public static function deleteStudent($id)
    {
        $student = self::findOrFail($id);
        $student->delete();
    }

    public static function getNameStudents()
    {
        return self::get(['id', 'fullname']);
    }

    public static function getNameStudentById($id)
    {
        return self::where('id', $id)
            ->select('id', 'fullname')
            ->firstOrFail();
    }

    public static function getStudentsWithMajorId($id)
    {
        return self::where('major_id', $id)
            ->select('id', 'fullname')
            ->get();
    }
    public static function getProfileStudent()
    {
        return self::all();
    }
    public static function getAllForPdf()
    {
        return self::select('id', 'fullname', 'email', 'phone', 'image', 'code', 'major_id', 'class_id')
            ->get();
    }

    public static function getCredits()
    {
        return self::with('subject_class', 'student')
            ->where('student_id', 'credit', 'subject_class_id')
            ->get();
    }

    public function getDateOfBirthAttribute($value)
    {
        return Carbon::parse($value);
    }

    public function getCardIssuanceDateAttribute($value)
    {
        return Carbon::parse($value);
    }
    public static function generateStudentCode()
    {
        $latestStudent = self::orderBy('id', 'desc')->first();
        $newCode = 'STU' . str_pad((int) substr($latestStudent->code, 3) + 1, 5, '0', STR_PAD_LEFT);
        while (self::where('code', $newCode)->exists()) {
            $newCode = 'STU' . str_pad((int) substr($newCode, 3) + 1, 5, '0', STR_PAD_LEFT);
        }

        return $newCode;
    }
    public static function getStudentsByMajorClass($id)
    {
        return self::where('major_class_id', $id)
            ->get();
    }

    public static function getStudentDetailById($id)
    {
        return self::with(['major', 'stuClass', 'totalTuition', 'studentSubjectClasses.subjectClass'])
            ->where('id', $id)
            ->firstOrFail();
    }

    public function getGroupedSubjectResults()
    {
        return $this->studentSubjectClasses
            ->load(['subjectClass.subject', 'scores.subjectScoreType'])
            ->groupBy(function ($item) {
                return $item->subjectClass->subject->id;
            })
            ->map(function ($attempts) {
                return $attempts->sortByDesc('created_at');
            });
    }

    public static function searchStudents($searchTerm)
    {
        return self::where(function ($query) use ($searchTerm) {
            $query->where('full_name', 'LIKE', "%{$searchTerm}%")
                ->orWhere('code', 'LIKE', "%{$searchTerm}%")
                ->orWhere('email', 'LIKE', "%{$searchTerm}%");
        })
        ->with(['major', 'stuClass'])
        ->get();
    }

    public static function getDetailedStudent($id)
    {
        return self::with([
            'major',
            'stuClass',
            'studentSubjectClasses.subjectClass.subject',
            'studentSubjectClasses.scores.subjectScoreType',
            'totalTuition'
        ])->findOrFail($id);
    }

}
