<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentSeachController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Lấy danh sách sinh viên kèm thông tin chuyên ngành và lớp chuyên ngành
            $students = Student::with(['major', 'majorClass'])
                ->select('id', 'full_name', 'code', 'email', 'phone', 'major_id', 'major_class_id')
                ->get();

            // Trả về view với dữ liệu sinh viên
            return Inertia::render('Teacher/StudentSeach/Page', [
                'students' => $students,
                'success' => session('success'),
                'error' => session('error')
            ]);

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Có lỗi xảy ra khi tải danh sách sinh viên');
        }
    }

    /**
     * Tìm kiếm sinh viên theo từ khóa
     */
    public function searchStudents(Request $request) 
    {
        try {
            $searchTerm = $request->search;

            // Tìm kiếm sinh viên theo các tiêu chí
            $students = Student::with(['major', 'majorClass'])
                ->where(function($query) use ($searchTerm) {
                    $query->where('full_name', 'LIKE', "%{$searchTerm}%")
                          ->orWhere('code', 'LIKE', "%{$searchTerm}%") 
                          ->orWhere('email', 'LIKE', "%{$searchTerm}%")
                          ->orWhere('phone', 'LIKE', "%{$searchTerm}%");
                })
                ->select('id', 'full_name', 'code', 'email', 'phone', 'major_id', 'major_class_id')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $students
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Có lỗi xảy ra khi tìm kiếm sinh viên'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $student = Student::with(['major', 'majorClass'])
                ->select('id', 'full_name', 'code', 'email', 'phone', 'image', 'status', 'major_id', 'major_class_id')
                ->findOrFail($id);

            return Inertia::render('Teacher/StudentSeach/Detail', [
                'student' => $student,
                'success' => session('success'),
                'error' => session('error')
            ]);

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Không tìm thấy thông tin sinh viên');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
