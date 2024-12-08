<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SubjectClassRequest;
use App\Models\SubjectClass;
use App\Models\Subject;
use App\Models\Employee;
use App\Models\Semester;
use App\Models\Credit;
use App\Models\MajorClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectClassController extends Controller
{
    /**
     * Hiển thị danh sách lớp học phần với tìm kiếm và phân trang
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');

        $subjectClasses = SubjectClass::where('name', 'like', "%$search%")
            ->latest()
            ->paginate($limit);

        return Inertia::render('Admin/SubjectClasses/Show', [
            'subjectClasses' => $subjectClasses,
            'limit' => $limit,
            'search' => $search,
        ]);
    }

    /**
     * Hiển thị form tạo mới
     */
    public function create()
    {
        return Inertia::render('Admin/SubjectClasses/Create', [
            'subjects' => Subject::with('major')->get(),
            'semesters' => Semester::getSemester(),
            'employees' => Employee::getNameEmployees(),
            'credits' => Credit::getAllCredit(),
            'majorClasses' => MajorClass::getNameClasses()->map(function ($majorClass) {
                $majorClass->student_count = MajorClass::studentCount($majorClass->id);
                return $majorClass;
            }),
        ]);
    }

    /**
     * Lưu lớp học phần mới
     */
    public function store(SubjectClassRequest $request)
    {
        $validated = $request->validated();

        if (!empty($validated['major_class_id'])) {
            if (SubjectClass::checkExistingClass($validated['major_class_id'], $validated['subject_id'])) {
                return redirect()->back()->withInput()->withErrors(['Lớp đã tồn tại cho môn học này.']);
            }
        }

        $subjectClass = SubjectClass::create($validated);
        $subjectClass->addStudents($validated['major_class_id']);

        return redirect()->route('admin.subjectclasses.index')->with('success', 'Thêm lớp học phần thành công!');
    }

    /**
     * Hiển thị form chỉnh sửa
     */
    public function edit(SubjectClass $subjectClass)
    {
        return Inertia::render('Admin/SubjectClasses/Edit', [
            'subjectClass' => $subjectClass,
            'subjects' => Subject::getCodeSubject(),
            'semesters' => Semester::getSemester(),
            'employees' => Employee::getNameEmployees(),
            'credits' => Credit::getAllCredit(),
            'majorClasses' => MajorClass::getNameClasses(),
        ]);
    }

    /**
     * Cập nhật lớp học phần
     */
    public function update(SubjectClassRequest $request, SubjectClass $subjectClass)
    {
        $validated = $request->validated();
        $subjectClass->update($validated);

        return redirect()->route('admin.subjectclasses.index')->with('success', 'Cập nhật lớp học phần thành công!');
    }

    /**
     * Xóa lớp học phần
     */
    public function destroy(SubjectClass $subjectClass)
    {
        $subjectClass->delete();
        return redirect()->route('admin.subjectclasses.index')->with('success', 'Xóa lớp học phần thành công!');
    }
}
