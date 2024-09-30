<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MajorClassSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('major_classes')->insert([
            ['training_system' => 'Regular', 'name' => 'CNTT2023', 'quantity' => 50, 'major_id' => 1, 'employee_id' => 1],
            ['training_system' => 'Regular', 'name' => 'HTTT2023', 'quantity' => 45, 'major_id' => 2, 'employee_id' => 2],
            ['training_system' => 'Regular', 'name' => 'KT2023', 'quantity' => 60, 'major_id' => 3, 'employee_id' => 3],
        ]);
    }
}