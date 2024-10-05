<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogOutController;
use App\Http\Controllers\Auth\ProfileController;
use Illuminate\Support\Facades\Route;

// Route cho đăng nhập
Route::get('/', [LoginController::class, 'index'])->name('login');

// Routes cho đăng nhập bằng Google
Route::prefix('login')->group(function () {
    // Admin
    Route::get('admin', [LoginController::class, 'loginAdmin'])->name('login.admin');
    Route::get('admin/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login.admin');
    // Teacher
    Route::get('teacher', [LoginController::class, 'loginTeacher'])->name('login.teacher');
    Route::get('teacher/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login.teacher');
    // Student
    Route::get('student', [LoginController::class, 'loginStudent'])->name('login.student');
    Route::get('student/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login.student');
});

Route::get('callback/google', [GoogleController::class, 'handleGoogleCallback'])->name('google.callback');

Route::post('logout', [LogOutController::class, 'logoutEmployee'])->name('admin.logout');

Route::get('admin/profile', [ProfileController::class, 'profileAdmin'])->name('profile.admin');