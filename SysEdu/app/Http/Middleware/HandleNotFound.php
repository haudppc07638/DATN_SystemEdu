<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HandleNotFound
{
    public function handle(Request $request, Closure $next)
    {
        try {
            return $next($request);
        } catch (\Exception $e) {
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return Inertia::render('Admin/404', [
                    'status' => 404,
                    'message' => 'Không tìm thấy trang yêu cầu'
                ]);
            }
            throw $e;
        }
    }
}