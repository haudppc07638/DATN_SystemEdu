<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class EmployeeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('employees')->insert([
            [
                'full_name' => 'Admin LocTV',
                'email' => 'loctvpc06110@fpt.edu.vn',
                'password' => Hash::make('password'),
                'phone' => '0123456789',
                'image' => 'default.jpg',
                'position' => 'admin',
                'faculty_id'=> 1,
                'department_id' => 1,
            ],
            [
                'full_name' => 'Teacher One',
                'email' => 'teacher1@example.com',
                'password' => Hash::make('password'),
                'phone' => '0987654321',
                'image' => 'default.jpg',
                'position' => 'teacher',
                'faculty_id'=> 2,
                'department_id' => 2,
            ],
            [
                'full_name' => 'Teacher Two',
                'email' => 'teacher2@example.com',
                'password' => Hash::make('password'),
                'phone' => '0123987456',
                'image' => 'default.jpg',
                'position' => 'teacher',
                'faculty_id'=> 3,
                'department_id' => 3,
            ],
        ]);
    }
}