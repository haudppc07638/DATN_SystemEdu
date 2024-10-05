<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle(Request $request){
        // dd($request);
        if ($request->routeIs('google.login.admin')) {
            session(['google_user_type' => 'admin']);
        } 
        else if ($request->routeIs('google.login.teacher')) {
            session(['google_user_type'=> 'teacher']);
        }
        else {
            session(['google_user_type' => 'student']);
        }

        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
        $userType = session('google_user_type');

        if ($userType == 'admin') {
            $user = Employee::where('email', $googleUser->getEmail())->where('position', 'admin')->first();
            if (!$user) {
                return redirect()->route('login')->with('error','Email bạn không có quyền đăng nhập trang này !');
            }
            Auth::guard('employee')->login($user);
        }
        else if ($userType == 'teacher') {
            $user = Employee::where('email', $googleUser->getEmail())->where('position', 'teacher')->first();
            if (!$user) {
                return redirect()->route('login')->with('error', 'Email bạn không có quyền đăng nhập trang này !');
            }
            Auth::guard('employee')->login($user);  
        }
        else if ($userType == 'student') {
            $user = Student::where('email', $googleUser->getEmail())->first();
            if (!$user) {
                return redirect()->route('login')->with('error', 'Email bạn không có quyền đăng nhập trang này !');
            }
            Auth::guard('student')->login($user);
        }
        
        if ($user) {
            return redirect()->intended('/' . ($userType === 'admin' ? 'admin' : ($userType === 'teacher' ? 'teacher' : 'student')));
        }

        return redirect()->route('login')->with('error','Email không có quyền truy cập !');
    }
}
