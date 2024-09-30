<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'full_name' => 'Nguyễn Văn X',
                'code' => 'ST001',
                'email' => 'student1@example.com',
                'password' => Hash::make('password'),
                'phone' => '0123456789',
                'image' => 'default.jpg',
                'major_id' => 1,
                'major_class_id' => 1,
                'status' => 'active',
            ],
            [
                'full_name' => 'Trần Thị Y',
                'code' => 'ST002',
                'email' => 'student2@example.com',
                'password' => Hash::make('password'),
                'phone' => '0987654321',
                'image' => 'default.jpg',
                'major_id' => 2,
                'major_class_id' => 2,
                'status' => 'active',
            ],
            [
                'full_name' => 'Lê Văn Z',
                'code' => 'ST003',
                'email' => 'student3@example.com',
                'password' => Hash::make('password'),
                'phone' => '0369852147',
                'image' => 'default.jpg',
                'major_id' => 3,
                'major_class_id' => 3,
                'status' => 'active',
            ],
        ]);
    }
}