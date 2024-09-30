<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('subjects')->insert([
            [
                'name' => 'Lập trình Java',
                'code' => 'JAVA101',
                'credit' => 3,
                'price' => 1500000,
                'description' => 'Môn học về lập trình Java cơ bản',
                'major_id' => 1,
            ],
            [
                'name' => 'Cơ sở dữ liệu',
                'code' => 'DB101',
                'credit' => 4,
                'price' => 2000000,
                'description' => 'Môn học về cơ sở dữ liệu',
                'major_id' => 2,
            ],
            [
                'name' => 'Kế toán tài chính',
                'code' => 'ACC201',
                'credit' => 3,
                'price' => 1800000,
                'description' => 'Môn học về kế toán tài chính',
                'major_id' => 3,
            ],
        ]);
    }
}