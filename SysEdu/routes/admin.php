<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

// Middleware xác thực và phân quyền admin
// Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');
    
        Route::get('phong-ban', [DepartmentController::class, 'index'])->name('admin.departments.show');
        Route::get('phong-ban/them', [DepartmentController::class, 'create'])->name('admin.departments.create');
        Route::post('phong-ban/them', [DepartmentController::class, 'store'])->name('admin.departments.store');
        Route::get('phong-ban/{department}/sua', [DepartmentController::class, 'edit'])->name('admin.departments.edit');
        Route::post('phong-ban/{department}/sua', [DepartmentController::class, 'update'])->name('admin.departments.update');
        Route::delete('phong-ban/{department}', [DepartmentController::class, 'destroy'])->name('admin.departments.destroy');
// });