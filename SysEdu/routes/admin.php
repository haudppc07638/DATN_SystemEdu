<?php

use App\Http\Controllers\Admin\ClassroomController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền admin
// Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');

    // Departments 
    Route::name('admin.departments.')->group(function () {
        Route::get('phong-ban', [DepartmentController::class, 'index'])->name('show');
        Route::get('phong-ban/them', [DepartmentController::class, 'create'])->name('create');
        Route::post('phong-ban/them', [DepartmentController::class, 'store'])->name('store');
        Route::get('phong-ban/{department}/sua', [DepartmentController::class, 'edit'])->name('edit');
        Route::post('phong-ban/{department}/sua', [DepartmentController::class, 'update'])->name('update');
        Route::delete('phong-ban/{department}', [DepartmentController::class, 'destroy'])->name('destroy');
    });

    // Classrooms
    Route::name('admin.classrooms.')->group(function () {
        Route::get('phong-hoc', [ClassroomController::class, 'index'])->name('show');
        Route::get('phong-hoc/them', [ClassroomController::class, 'create'])->name('create');
        Route::post('phong-hoc/them', [ClassroomController::class,'store'])->name('store');
        Route::get('phong-hoc/{classroom}/sua', [ClassroomController::class,'edit'])->name('edit');
        Route::post('phong-hoc/{classroom}/sua', [ClassroomController::class,'update'])->name('update');
        Route::delete('phong-hoc/{classroom}', [ClassroomController::class, 'destroy'])->name('destroy');
    });
        
// });