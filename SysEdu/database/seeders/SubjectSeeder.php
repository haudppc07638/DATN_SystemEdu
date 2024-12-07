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
                'name' => 'Giáo dục thể chất',
                'code' => 'GDTC2024',
                'credit' => 2,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],  
            [
                'name' => 'Giáo dục quốc phòng và An ninh',
                'code' => 'QPAN2024',
                'credit' => 2,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ], 
            [
                'name' => 'Tin học',
                'code' => 'TH2024',
                'credit' => 2,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ], 
            [
                'name' => 'Tiếng Anh 1',
                'code' => 'TAi2024',
                'credit' => 4,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tiếng Anh 2',
                'code' => 'TAii2024',
                'credit' => 4,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kỹ năng thiết yếu',
                'code' => 'KNTY2024',
                'credit' => 1,
                'description' => 'Môn học',
                'major_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}