<?php

use App\Http\Controllers\Admin\MajorClassController as AdminMajorClassController;
use App\Http\Controllers\Admin\MajorController as AdminMajorController;
use App\Http\Controllers\Teacher\StudentSeachController;
use Illuminate\Support\Facades\Route;

Route::get('/all-students', [StudentSeachController::class, 'getAllStudents']);

Route::get('/students', [StudentSeachController::class, 'searchStudents']);

Route::get('/majors', [AdminMajorController::class, 'getMajorsByFaculty']);

Route::get('/majorClasses', [AdminMajorClassController::class, 'getMajorClassesByMajor']);

Route::patch('/majorClasses/{majorClass}/end', [AdminMajorClassController::class, 'endMajorClass']);
