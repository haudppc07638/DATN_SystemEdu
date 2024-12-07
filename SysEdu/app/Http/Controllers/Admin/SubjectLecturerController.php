<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SubjectLecturerRequest;
use App\Models\Subject;
use App\Models\Employee;
use App\Models\Major;
use App\Models\SubjectLecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectLecturerController extends Controller
{
    /**
     * Display the form for creating a new subject lecturer.
     */
    public function register(Request $request)
    {
        $majorId = $request->input('major_id');
        $subjects = Subject::with('subjectLecturers')->get();
        $employees = Employee::where('position', 'teacher')->get();
        $majors = Major::all();

        return Inertia::render('Admin/SubjectLecturers/Register', [
            'subjects' => $subjects,
            'employees' => $employees,
            'majors' => $majors,
            'majorId' => $majorId,
        ]);
    }

    /**
     * Store a newly created subject lecturer in storage.
     */
    public function storeOrUpdate(SubjectLecturerRequest $request)
    {
        $request->validated();
        $subject = Subject::findOrFail($request->subject_id);

        $subject->lecturers()->sync($request->employee_ids);

        return redirect()->route('admin.subject_lecturers.create')->with('success', 'Đăng ký giảng viên thành công.');
    }

    /**
     * Filter subjects based on the selected major.
     */
    public function filter(Request $request)
    {
        $majorId = $request->input('major_id');

        $subjects = Subject::with('lecturers.employee')
            ->when($majorId, function ($query) use ($majorId) {
                return $query->where('major_id', $majorId);
            })
            ->get();

        return response()->json($subjects);
    }

    /**
     * Get lecturers by subject.
     */
    public function getLecturersBySubject(Request $request)
    {
        $subjectId = $request->input('subject_id');

        $lecturers = SubjectLecturer::with('employee')
            ->where('subject_id', $subjectId)
            ->get()
            ->pluck('employee');

        return response()->json($lecturers);
    }
}
