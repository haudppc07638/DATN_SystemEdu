<?php

use App\Http\Controllers\Admin\MajorClassController as AdminMajorClassController;
use App\Http\Controllers\Admin\MajorController as AdminMajorController;
use Illuminate\Support\Facades\Route;

Route::get('/majors', [AdminMajorController::class, 'getMajorsByFaculty']);

Route::get('/majorClasses', [AdminMajorClassController::class, 'getMajorClassesByMajor']);

Route::patch('/majorClasses/{majorClass}/end', [AdminMajorClassController::class, 'endMajorClass']);