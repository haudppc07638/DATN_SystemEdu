<?php

use App\Http\Controllers\Admin\ClassroomController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\FacultyController;
use App\Http\Controllers\Admin\MajorController;
use App\Http\Controllers\Admin\SubjectController;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');

    // Department
    Route::name('admin.departments.')->group(function () {
        Route::get('phong-ban', [DepartmentController::class, 'index'])->name('show');
        Route::get('phong-ban/them', [DepartmentController::class, 'create'])->name('create');
        Route::post('phong-ban/them', [DepartmentController::class, 'store'])->name('store');
        Route::get('phong-ban/{department}/sua', [DepartmentController::class, 'edit'])->name('edit');
        Route::patch('phong-ban/{department}/sua', [DepartmentController::class, 'update'])->name('update');
        Route::delete('phong-ban/{department}', [DepartmentController::class, 'destroy'])->name('destroy');
    });

    // Classroom
    Route::name('admin.classrooms.')->group(function () {
        Route::get('phong-hoc', [ClassroomController::class, 'index'])->name('show');
        Route::get('phong-hoc/them', [ClassroomController::class, 'create'])->name('create');
        Route::post('phong-hoc/them', [ClassroomController::class,'store'])->name('store');
        Route::get('phong-hoc/{classroom}/sua', [ClassroomController::class,'edit'])->name('edit');
        Route::patch('phong-hoc/{classroom}/sua', [ClassroomController::class,'update'])->name('update');
        Route::delete('phong-hoc/{classroom}', [ClassroomController::class, 'destroy'])->name('destroy');
    });

    // Faculty
    Route::name('admin.faculties.')->group(function () {
        Route::get('khoa', [FacultyController::class, 'index'])->name('show');
        Route::get('khoa/them', [FacultyController::class, 'create'])->name('create');
        Route::post('khoa/them', [FacultyController::class, 'store'])->name('store');
        Route::get('khoa/{faculty}/sua', [FacultyController::class, 'edit'])->name('edit');
        Route::patch('khoa/{faculty}/sua', [FacultyController::class, 'update'])->name('update');
        Route::delete('khoa/{faculty}', [FacultyController::class, 'destroy'])->name('destroy');
    });

    //Major
    Route::name('admin.majors.')->group(function () {
        Route::get('chuyen-nganh', [MajorController::class, 'index'])->name('show');
        Route::get('chuyen-nganh/them', [MajorController::class, 'create'])->name('create');
        Route::post('chuyen-nganh/them', [MajorController::class, 'store'])->name('store');
        Route::get('chuyen-nganh/{major}/sua', [MajorController::class, 'edit'])->name('edit');
        Route::patch('chuyen-nganh/{major}/sua', [MajorController::class, 'update'])->name('update');
        Route::delete('chuyen-nganh/{major}', [MajorController::class, 'destroy'])->name('destroy');
    }); 

    //Subject
    Route::name('admin.subjects.')->group(function () {
        Route::get('mon-hoc', [SubjectController::class,'index'])->name('show');
        Route::get('mon-hoc/them', [SubjectController::class,'create'])->name('create');
        Route::post('mon-hoc/them', [SubjectController::class,'store'])->name('store');
        Route::get('mon-hoc/{subject}/sua', [SubjectController::class,'edit'])->name('edit');
        Route::patch('mon-hoc/{subject}/sua', [SubjectController::class,'update'])->name('update');
        Route::delete('mon-hoc/{subject}', [SubjectController::class,'destroy'])->name('destroy');
    });
        
// });