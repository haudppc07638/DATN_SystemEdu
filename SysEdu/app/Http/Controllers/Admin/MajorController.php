<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MajorRequest;
use App\Models\Faculty;
use App\Models\Major;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MajorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $majors = Major::search($search)
            ->active()
            ->withFaculty()
            ->latestPaginate($limit);

        return Inertia::render('Admin/Majors/Show', [
            'majors' => $majors,
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
        $faculties = Faculty::getFacultiesActive();
        return Inertia::render('Admin/Majors/Create', [
            'faculties' => $faculties
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MajorRequest $request)
    {
        $validated = $request->validated();
        Major::create($validated);
        return redirect()->route('admin.majors.show')->with('success', 'Thêm chuyên ngành thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Major $major)
    {
        $faculties = Faculty::getFacultiesActive();
        return Inertia::render('Admin/Majors/Edit', [
            'major' => $major,
            'faculties' => $faculties
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MajorRequest $request, Major $major)
    {
        $validated = $request->validated();
        $major->update($validated);
        return redirect()->route('admin.majors.show')->with('success', 'Sửa chuyên ngành thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Major $major)
    {
        $major->softDelete();
        return redirect()->route('admin.majors.show')->with('success', 'Xóa thành công chuyên ngành');
    }
}
