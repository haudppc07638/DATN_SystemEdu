<?php

use App\Http\Controllers\Blog\AdmissionsController;
use App\Http\Controllers\Blog\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/home', [HomeController::class, 'index']) -> name('home');
Route::get("/admissions", [AdmissionsController::class, 'index']) -> name("admissions");