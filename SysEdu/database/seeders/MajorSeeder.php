<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MajorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('majors')->insert([
            ['name' => 'Công nghệ phần mềm', 'faculty_id' => 1],
            ['name' => 'Hệ thống thông tin', 'faculty_id' => 1],
            ['name' => 'Kế toán', 'faculty_id' => 2],
            ['name' => 'Quản trị kinh doanh', 'faculty_id' => 2],
            ['name' => 'Tiếng Anh', 'faculty_id' => 3],
            ['name' => 'Tiếng Nhật', 'faculty_id' => 3],
        ]);
    }
}