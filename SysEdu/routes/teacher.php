<?php

use App\Http\Controllers\Student\HomeController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền teacher
// Route::middleware(['auth', 'role:teacher'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('teacher.dashboard');
// });