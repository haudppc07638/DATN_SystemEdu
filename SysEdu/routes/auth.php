<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Route cho đăng nhập
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
// Route::post('/login', [AuthController::class, 'login']);