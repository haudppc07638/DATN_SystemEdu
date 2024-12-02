<?php

use App\Http\Controllers\Teacher\AttendanceController;
use App\Http\Controllers\Teacher\AttendanceDetailController;
use App\Http\Controllers\Teacher\ExamDetailController;
use App\Http\Controllers\Teacher\ExamListController;
use App\Http\Controllers\Teacher\HomeController;
use App\Http\Controllers\Teacher\MyClassController;
use App\Http\Controllers\Teacher\MyClassDetailController;
use App\Http\Controllers\Teacher\StudentSeachController;
use App\Http\Controllers\Teacher\TeachingScheduleController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền teacher
// Route::middleware('teacher')->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('teacher.home');
    Route::get('/student-seach', [StudentSeachController::class, 'index'])->name('teacher.seach');
    Route::get('/student-attendance', [AttendanceController::class, 'index'])->name('teacher.attendance');
    Route::get('/student-attendance-detail', [AttendanceDetailController::class, 'index'])->name('teacher.attendance-detail');
    Route::get('/student-examlist', [ExamListController::class, 'index'])->name('teacher.examlist');
    Route::get('/student-examdetail', [ExamDetailController::class, 'index'])->name('teacher.examdetail');
    Route::get('/student-myclass', [MyClassController::class, 'index'])->name('teacher.myclass');
    Route::get('/student-myclass-detail', [MyClassDetailController::class, 'index'])->name('teacher.myclass-detail');
    Route::get('/teaching-schedule', [TeachingScheduleController::class, 'index'])->name('teacher.teaching-schedule');
// });
