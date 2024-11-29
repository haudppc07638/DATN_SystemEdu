<?php

use App\Http\Controllers\Teacher\HomeController;
use App\Http\Controllers\Teacher\StudentSeachController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền teacher
// Route::middleware('teacher')->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('teacher.home');
    Route::get('/student-seach', [StudentSeachController::class, 'index'])->name('teacher.home');

// });
