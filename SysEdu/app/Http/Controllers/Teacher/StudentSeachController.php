<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentSeachController extends Controller
{
    public function index()
    {
        $students = Student::getAllStudents();
        return inertia('Teacher/StudentSeach/Page', [
            'students' => $students
        ]);
    }

    public function getAllStudents()
    {
        try {
            $students = Student::with(['major', 'stuClass'])->get();
            return response()->json([
                'status' => 'success', 
                'data' => $students
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }


    public function searchStudents(Request $request)
    {
        try {
            $searchTerm = $request->search_term;

            if (empty($searchTerm)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Vui lòng nhập từ khóa tìm kiếm'
                ]);
            }

            $students = Student::searchStudents($searchTerm);

            return response()->json([
                'status' => 'success',
                'data' => $students
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Có lỗi xảy ra vui lòng thử lại sau !'
            ]);
        }
    }

    public function show($id)
    {
        try {
            $student = Student::getStudentDetailById($id);
            return inertia('Teacher/StudentSeach/Show', [
                'student' => $student
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Không tìm thấy sinh viên');
        }
    }
}
