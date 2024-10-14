<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StudentRequest;
use App\Models\Faculty;
use App\Models\Student;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StudentController extends Controller
{
    protected $imageService;
    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $students = Student::search($search)
            ->withMajorAndMajorClass()
            ->latestPaginate($limit);

        return Inertia::render('Admin/Students/Show', [
            'students' => $students,
            'limit' => $limit,
            'search' => $search,
            'currentPage' => $page
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $faculties = Faculty::getFaculties();
        return Inertia::render('Admin/Students/Create', [
            'faculties' => $faculties
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request)
    {
        $validated = $request->validated();

        $validated['image'] = $this->imageService->handleImageStore($request);

        $validated['password'] = Hash::make($validated['password']);

        Student::create($validated);
        return redirect()->route('admin.students.show')->with('success', 'Thêm sinh viên Thành công');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $student->load('major');
        $faculties = Faculty::getFaculties();
        return Inertia::render('Admin/Students/Edit', [
            'faculties' => $faculties,
            'student' => $student
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $validated['image'] = $this->imageService->handleImageUpdate($request, $student);
        }

        $student->update($validated);
        return redirect()->route('admin.students.show')->with('success', 'Cập nhập thông tin sinh viên');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->forceDelete();
        return redirect()->route('admin.students.show')->with('success', 'Xóa sinh viên thành công !');
    }
}
