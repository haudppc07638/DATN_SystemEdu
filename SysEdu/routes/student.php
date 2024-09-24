<?php

use App\Http\Controllers\Student\HomeController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền student
// Route::middleware(['auth', 'role:student'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('student.dashboard');
// });