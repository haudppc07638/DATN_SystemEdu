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
        // Route::post('phong-ban/them', [DepartmentController::class, 'store'])->name('admin.departments.store');
// });