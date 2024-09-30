<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Route cho đăng nhập
Route::get('/', [LoginController::class, 'index'])->name('login');

Route::get('/login/admin', [LoginController::class, 'loginAdmin'])->name('login.admin');

Route::get('/login/teacher', [LoginController::class, 'loginTeacher'])->name('login.teacher');

Route::get('/login/student', [LoginController::class, 'loginStudent'])->name('login.student');

Route::get('admin/profile', [ProfileController::class, 'profileAdmin'])->name('profile.admin');
