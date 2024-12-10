<?php

use App\Http\Controllers\Blog\AdmissionsController;
use App\Http\Controllers\Blog\GeneralIntroductionController;
use App\Http\Controllers\Blog\HomeController;
use App\Http\Controllers\Blog\RecruitmentController;
use App\Http\Controllers\Blog\TrainingProgramController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name("home");
Route::get('/home', [HomeController::class, 'index'])->name("home");
Route::get("/admissions", [AdmissionsController::class, 'index'])->name("admissions");
Route::get("/recruitment", [RecruitmentController::class, 'index'])->name("recruitment");
Route::get("/training-program", [TrainingProgramController::class, 'index'])->name("training-program"); 
Route::get('/general-introduction', [GeneralIntroductionController::class, 'index'])->name("general-introduction");