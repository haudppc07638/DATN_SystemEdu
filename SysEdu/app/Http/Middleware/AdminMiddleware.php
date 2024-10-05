<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::guard('employee')->user();
        if (!$user){
            return redirect()->route('login')->with('error', 'Vui lòng đăng nhập để vào hệ thống !');
        }
        if ($user->position != 'admin'){
            return redirect()->route('login')->with('error', 'Email bạn không có quyền đăng nhập trang này !');
        }
        return $next($request);
    }
}
