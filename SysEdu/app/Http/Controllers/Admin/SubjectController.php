<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SubjectRequest;
use App\Models\Faculty;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $subjects = Subject::search($search)
            ->withMajor()
            ->latestPaginate($limit);

        return Inertia::render('Admin/Subjects/Show', [
            'subjects'=> $subjects,
            'limit' => $limit,
            'search'=> $search,
            'currentPage'=> $page
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $faculties = Faculty::getFaculties();
        return Inertia::render('Admin/Subjects/Create', [
            'faculties'=> $faculties
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SubjectRequest $request)
    {
        $request->validated();
        $data = $request->only('name', 'code', 'credit', 'description', 'major_id');
        $data['price'] = $data['credit'] * Subject::CREDIT_PRICE;
        Subject::create($data);
        return redirect()->route('admin.subjects.show')->with('success','Thêm môn học thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        $faculties = Faculty::getFaculties();
        return Inertia::render('Admin/Subjects/Edit', [
            'subject' => $subject->load('major.faculty'),
            'faculties'=> $faculties
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SubjectRequest $request, Subject $subject)
    {
        $request->validated();
        $data = $request->only('name', 'code', 'credit', 'description', 'major_id') ;
        $data['price'] = $data['credit'] * Subject::CREDIT_PRICE;
        $subject->update($data);
        return redirect()->route('admin.subjects.show')->with('success','Sửa môn học thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        if($subject->hasRelations()){
            $subject->delete();
            return redirect()->route('admin.subjects.show')->with('success', 'Xóa môn học thành công !');
        }
        else{
            $subject->forceDelete();
            return redirect()->route('admin.subjects.show')->with('success', 'Xóa môn học thành công !');
        }
    }
}
