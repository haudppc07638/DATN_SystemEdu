<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SemesterRequest;
use App\Models\Semester;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $semesters = Semester::search($search)->latestPaginate($limit);

        return Inertia::render('Admin/Semesters/Show', [
            'semesters' => $semesters,
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
        return Inertia::render('Admin/Semesters/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SemesterRequest $request)
    {
        // dd($request->all());
        $validated = $request->validated();
        $validated['start_date'] = Carbon::parse($validated['start_date'])->format('Y-m-d');
        $validated['end_date'] = Carbon::parse($validated['end_date'])->format('Y-m-d');
        Semester::create($validated);
        return redirect()->route('admin.semesters.show')->with('success','Thêm học kỳ thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Semester $semester)
    {
        return Inertia::render('Admin/Semesters/Edit', [
            'semester'=> $semester
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SemesterRequest $request, Semester $semester)
    {
        $validated = $request->validated();
        $validated['start_date'] = Carbon::parse($validated['start_date'])->format('Y-m-d');
        $validated['end_date'] = Carbon::parse($validated['end_date'])->format('Y-m-d');
        $semester->update($validated);
        return redirect()->route('admin.semesters.show')->with('success', 'Cập nhập thông tin học kỳ thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Semester $semester)
    {
        if ($semester->hasRelations()){
            $semester->delete();
            return redirect()->route('admin.semesters.show')->with('success','Xóa học kỳ thành công');
        }
        else{
            $semester->forceDelete();
            return redirect()->route('admin.semesters.show')->with('success','Xóa học kỳ thành công');
        }
    }
}
