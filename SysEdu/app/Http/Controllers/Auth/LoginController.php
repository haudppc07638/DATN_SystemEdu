<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/LoginPortal');
    }

    public function loginAdmin()
    {
        return Inertia::render('Auth/LoginAdmin');
    }

    public function loginTeacher()
    {
        return Inertia::render('Auth/LoginTeacher');
    }

    public function loginStudent()
    {
        return Inertia::render('Auth/LoginStudent');
    }
}
