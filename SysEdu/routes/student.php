<?php

use App\Http\Controllers\Student\ClassScheduleController;
use App\Http\Controllers\Student\ExamScheduleController;
use App\Http\Controllers\Student\HomeController;
use App\Http\Controllers\Student\RegisterForCourseController;
use App\Http\Controllers\Student\RegisterForCourseDetailController;
use App\Http\Controllers\Student\ReportNameClientController;
use App\Http\Controllers\Student\ScoreBoardController;
use App\Http\Controllers\Student\WalletController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền student
// Route::middleware(['auth', 'role:student'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'index'])->name('student.home');
    Route::get('/xem-diem-danh', [ReportNameClientController:: class, 'index']) -> name('student.report-name');
    Route::get('/dang-ki-lich-hoc', [ExamScheduleController:: class, 'index']) -> name('student.exam-schedule');
    Route::get('/dang-ki-mon-hoc', [RegisterForCourseController::class,'index']) -> name('student.register-for-course');
    Route::get('/chi-tiet-dang-ki-mon-hoc', [RegisterForCourseDetailController::class,'index']) -> name('student.register-for-course-detail');
    Route::get('/lich-hoc', [ClassScheduleController::class, 'index']) -> name('student.class-schedule');
    Route::get('/bang-diem', [ScoreBoardController::class, 'index']) -> name('student.scoreboard');
    Route::get('/vi-sinh-vien', [WalletController::class, 'index']) -> name('student.wallet');
// });