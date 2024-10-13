<?php

use App\Http\Controllers\Admin\ClassroomController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\FacultyController;
use App\Http\Controllers\Admin\MajorClassController;
use App\Http\Controllers\Admin\MajorController;
use App\Http\Controllers\Admin\SemesterController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\SubjectController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\TimeSlotController;
use Illuminate\Support\Facades\Route;

Route::middleware(['admin'])->group(function () {
   
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
        Route::get('mon-hoc', [SubjectController::class, 'index'])->name('show');
        Route::get('mon-hoc/them', [SubjectController::class, 'create'])->name('create');
        Route::post('mon-hoc/them', [SubjectController::class, 'store'])->name('store');
        Route::get('mon-hoc/{subject}/sua', [SubjectController::class, 'edit'])->name('edit');
        Route::patch('mon-hoc/{subject}/sua', [SubjectController::class, 'update'])->name('update');
        Route::delete('mon-hoc/{subject}', [SubjectController::class, 'destroy'])->name('destroy');
    });

    //Employee
    Route::name('admin.employees.')->group(function () {
       Route::get('nhan-su', [EmployeeController::class, 'index'])->name('show');
       Route::get('nhan-su/them', [EmployeeController::class, 'create'])->name('create');
       Route::post('nhan-su/them', [EmployeeController::class, 'store'])->name('store');
       Route::get('nhan-su/{employee}/sua', [EmployeeController::class, 'edit'])->name('edit');
       Route::patch('nhan-su/{employee}/sua', [EmployeeController::class, 'update'])->name('update');
       Route::delete('nhan-su/{employee}', [EmployeeController::class, 'destroy'])->name('destroy');
    });

    //Major Class
    Route::name('admin.majorClasses.')->group(function () {
        Route::get('lop-chuyen-nganh', [MajorClassController::class,'index'])->name('show');
        Route::get('lop-chuyen-nganh/{major}/them', [MajorClassController::class, 'create'])->name('create');
        Route::post('lop-chuyen-nganh/them', [MajorClassController::class,'store'])->name('store');
        Route::get('lop-chuyen-nganh/{major}/{majorClass}/sua', [MajorClassController::class,'edit'])->name('edit');
        Route::patch('lop-chuyen-nganh/{majorClass}/sua', [MajorClassController::class, 'update'])->name('update');
        Route::delete('lop-chuyen-nganh/{majorClass}', [MajorClassController::class, 'destroy'])->name('destroy');
    });

    //Student
    Route::name('admin.students.')->group(function () {
        Route::get('sinh-vien', [StudentController::class, 'index'])->name('show');
        Route::get('sinh-vien/them', [StudentController::class, 'create'])->name('create');
        Route::post('sinh-vien/them', [StudentController::class, 'store'])->name('store');
        Route::get('sinh-vien/{student}/sua', [StudentController::class, 'edit'])->name('edit');
        Route::patch('sinh-vien/{student}/sua', [StudentController::class,'update'])->name('update');
        Route::delete('sinh-vien/{student}', [StudentController::class, 'destroy'])->name('destroy');
    });

    //Semesters
    Route::name('admin.semesters.')->group(function () {
        Route::get('hoc-ky', [SemesterController::class, 'index'])->name('show');
        Route::get('hoc-ky/them', [SemesterController::class, 'create'])->name('create');
        Route::post('hoc-ky/them', [SemesterController::class, 'store'])->name('store');
        Route::get('hoc-ky/{semester}/sua', [SemesterController::class, 'edit'])->name('edit');
        Route::patch('hoc-ky/{semester}/sua', [SemesterController::class, 'update'])->name('update');
        Route::delete('hoc-ky/{semester}', [SemesterController::class,'destroy'])->name('destroy');
    });

    //Timeslot
    Route::name('admin.timeSlots.')->group(function () {
        Route::get('ca-hoc', [TimeSlotController::class, 'index'])->name('show');
        Route::get('ca-hoc/them', [TimeSlotController::class, 'create'])->name('create');
        Route::post('ca-hoc/them', [TimeSlotController::class, 'store'])->name('store');
        Route::get('ca-hoc/{timeSlot}/sua', [TimeSlotController::class,'edit'])->name('edit');
        Route::patch('ca-hoc/{timeSlot}/sua', [TimeSlotController::class,'update'])->name('update');
        Route::delete('ca-hoc/{timeSlot}', [TimeSlotController::class, 'destroy'])->name('destroy');
    });
});