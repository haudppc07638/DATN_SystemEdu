<?php

use App\Http\Controllers\Admin\MajorController as AdminMajorController;
use Illuminate\Support\Facades\Route;

// Route để lấy danh sách chuyên ngành theo faculty_id
Route::get('/majors', [AdminMajorController::class, 'getMajorsByFaculty']);