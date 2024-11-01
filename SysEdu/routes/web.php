<?php

use App\Http\Controllers\Blog\AdmissionsController;
use App\Http\Controllers\Blog\HomeController;
use App\Http\Controllers\Blog\RecruitmentController;
use Illuminate\Support\Facades\Route;

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get("/admissions", [AdmissionsController::class, 'index'])->name("admissions");
Route::get("/recruitment", [RecruitmentController::class, 'index'])->name("recruitment");
