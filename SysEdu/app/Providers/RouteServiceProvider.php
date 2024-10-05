<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->routes(function () {
            Route::middleware('web')
                ->group(base_path('routes/web.php'));

            $this->mapAdminRoutes();
            $this->mapTeacherRoutes();
            $this->mapStudentRoutes();
            $this->mapAuthRoutes();
            $this->mapApiRoutes();
        });
    }

    protected function mapAdminRoutes()
    {
        Route::middleware('web')
            ->prefix('admin')
            ->group(base_path('routes/admin.php'));
    }

    protected function mapTeacherRoutes()
    {
        Route::middleware('web')
            ->prefix('teacher')
            ->group(base_path('routes/teacher.php'));
    }

    protected function mapStudentRoutes()
    {
        Route::middleware('web')
            ->prefix('student')
            ->group(base_path('routes/student.php'));
    }

    protected function mapAuthRoutes()
    {
        Route::middleware('web')
            ->prefix('auth')
            ->group(base_path('routes/auth.php'));
    }

    protected function mapApiRoutes()
    {
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));
    }
}
