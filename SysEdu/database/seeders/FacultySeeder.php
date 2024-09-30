<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacultySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('faculties')->insert([
            ['name' => 'Khoa Công nghệ thông tin', 'code' => 'CNTT', 'dean' => 'Nguyễn Văn A', 'assistant_dean' => 'Trần Thị B'],
            ['name' => 'Khoa Kinh tế', 'code' => 'KT', 'dean' => 'Lê Văn C', 'assistant_dean' => 'Phạm Thị D'],
            ['name' => 'Khoa Ngoại ngữ', 'code' => 'NN', 'dean' => 'Hoàng Văn E', 'assistant_dean' => 'Vũ Thị F'],
        ]);
    }
}