<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DepartmentRequest;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {  
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $departments = Department::search($search)->latestPaginate($limit);

        return Inertia::render('Admin/Departments/Show', [
            'departments' => $departments,
            'limit' => $limit,
            'search' => $search,
            'currentPage'=> $page
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Departments/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DepartmentRequest $request)
    {
        $validated = $request->validated();
        Department::create($validated);
        return redirect()->route('admin.departments.show')->with('success', 'Thêm sản phẩm thành công!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        return Inertia::render('Admin/Departments/Edit', [
            'department' => $department
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DepartmentRequest $request, Department $department)
    {
        $validated = $request->validated();
        $department->update($validated);
        return redirect()->route('admin.departments.show')->with('success', 'Cập nhật phòng ban thành công!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();
        return redirect()->route('admin.departments.show')->with('success', 'Xóa phòng ban thành công!');
        
    }
}
