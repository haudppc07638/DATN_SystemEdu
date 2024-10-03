<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ClassroomRequest;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $classrooms = Classroom::search($search)->latestPaginate($limit);

        return Inertia::render('Admin/Classrooms/Show', [
            'classrooms' => $classrooms,
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
        return Inertia::render('Admin/Classrooms/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClassroomRequest $request)
    {
        $validated = $request->validated();
        Classroom::create($validated);
        return redirect()->route('admin.classrooms.show')->with('success','Thêm phòng học thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        return Inertia::render('Admin/Classrooms/Edit', [
            'classroom' => $classroom
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClassroomRequest $request, Classroom $classroom)
    {
        $validated = $request->validated();
        $classroom->update($validated);
        return redirect()->route('admin.classrooms.show')->with('success','Cập nhập phòng học thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        $classroom->delete();
        return redirect()->route('admin.classrooms.show')->with('success','Xóa phòng thành công !');
    }
}
