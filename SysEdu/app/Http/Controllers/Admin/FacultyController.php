<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\FacultyRequest;
use App\Models\Faculty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacultyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $faculties = Faculty::search($search)
            ->active()
            ->latestPaginate($limit);

        return Inertia::render('Admin/Faculties/Show', [
            'faculties' => $faculties,
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
        return Inertia::render('Admin/Faculties/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FacultyRequest $request)
    {
        $validated = $request->validated();
        Faculty::create($validated);
        return redirect()->route('admin.faculties.show')->with('success','Thêm khoa thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faculty $faculty)
    {
        return Inertia::render('Admin/Faculties/Edit', [
            'faculty'=> $faculty
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FacultyRequest $request, Faculty $faculty)
    {
        $validated = $request->validated();
        $faculty->update($validated);
        return redirect()->route('admin.faculties.show')->with('success','Sửa khoa thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faculty $faculty)
    {    
        $faculty->softDelete();
        return redirect()->route('admin.faculties.show')->with('success','Xóa khoa thành công!');
    }
}
