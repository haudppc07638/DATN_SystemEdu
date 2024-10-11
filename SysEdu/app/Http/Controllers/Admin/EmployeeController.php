<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\EmployeeRequest;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Faculty;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class EmployeeController extends Controller
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

        $employees = Employee::search($search)
            ->withFacultyAndDepartment()
            ->latestPaginate($limit);

        return Inertia::render('Admin/Employees/Show', [
            'employees' => $employees,
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
        $departments = Department::getAllDepartment();
        return Inertia::render('Admin/Employees/Create', [
            'faculties' => $faculties,
            'departments' => $departments
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {
        $validated = $request->validated();

        $validated['image'] = $this->imageService->handleImageStore($request);
        $validated['password'] = Hash::make($validated['password']);

        Employee::create($validated);
        return redirect()->route('admin.employees.show')->with('success', 'Thêm nhân sự thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        $faculties = Faculty::getFaculties();
        $departments = Department::getAllDepartment();
        return Inertia::render('Admin/Employees/Edit', [
            'employee' => $employee,
            'faculties' => $faculties,
            'departments' => $departments
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        $validated = $request->validated();
        $validated['image'] = $this->imageService->handleImageUpdate($request, $employee);
        Employee::updated($validated);
        return redirect()->route('admin.employees.show')->with('success', 'Cập nhập thông tin nhân sự thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        if ($employee->hasRelations()) {
            $this->imageService->handleImageDelete($employee->image);
            $employee->delete();
            return redirect()->route('admin.employees.show')->with('success', 'Xóa nhân viên thành công !');
        } else {
            $employee->forceDelete();
            return redirect()->route('admin.employees.show')->with('success', 'Xóa nhân viên thành công !');
        }
    }
}
