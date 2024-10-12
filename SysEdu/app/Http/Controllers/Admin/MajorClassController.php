<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MajorClassRequest;
use App\Models\Employee;
use App\Models\Faculty;
use App\Models\Major;
use App\Models\MajorClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MajorClassController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faculties = Faculty::getFaculties();
        return Inertia::render('Admin/MajorClasses/Show', [
            'faculties'=> $faculties
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $major = Major::findOrFail($id);
        $faculty_id = $major->faculty_id;
        $employees = Employee::getAvailableTeachers($faculty_id);
        return Inertia::render('Admin/MajorClasses/Create', [
            'major' => $major,
            'employees' => $employees,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MajorClassRequest $request)
    {
        $validated = $request->validated();
        MajorClass::create($validated);
        return redirect()->route('admin.majorClasses.show')->with('success','Thêm lớp chuyên ngành thành công !');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($majorId, MajorClass $majorClass)
    {
        $majorClass->load(['major','employee']);
        $major = Major::findOrFail($majorId);
        $faculty_id = $major->faculty_id;
        $employees = Employee::getAvailableTeachers($faculty_id);

        return Inertia::render('Admin/MajorClasses/Edit', [
            'employees' => $employees,
            'majorClass' => $majorClass
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MajorClassRequest $request, MajorClass $majorClass)
    {
        $validated = $request->validated();
        $majorClass->update($validated);
        return redirect()->route('admin.majorClasses.show')->with('success','Cập nhập thông tin lớp chuyên ngành thành công !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MajorClass $majorClass)
    {
        if($majorClass->hasRelations()){
            $majorClass->delete();
            return redirect()->route('admin.majorClasses.show')->with('success','Xóa lớp chuyên ngành thành công !');
        }
        else{
            $majorClass->forceDelete();
            return redirect()->route('admin.majorClasses.show')->with('success','Xóa lớp chuyên ngành thành công !');
        }
    }

    public static function getMajorClassesByMajor(Request $request){
        $majorId = $request->query('major_id');
        $MajorClasses = MajorClass::getByMajorId($majorId);
        return response()->json($MajorClasses);
    }

    public function endMajorClass(MajorClass $majorClass){
        try {
            $majorClass->status = 1;
            $majorClass->save();

            return response()->json(['success' => true, 'message' => 'Lớp chuyên ngành đã kết thúc.']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Có lỗi xảy ra.'], 500);
        }
    }
}
