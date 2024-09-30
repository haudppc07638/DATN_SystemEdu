<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('departments')->insert([
            ['name' => 'P. A', 'location' => 'Tầng 1, Tòa nhà A'],
            ['name' => 'P. B', 'location' => 'Tầng 2, Tòa nhà B'],
            ['name' => 'P. C', 'location' => 'Tầng 3, Tòa nhà C'],
            ['name' => 'P. D', 'location' => 'Tầng 4, Tòa nhà D'],
            ['name' => 'P. E', 'location' => 'Tầng 5, Tòa nhà E'],
            ['name' => 'P. F', 'location' => 'Tầng 5, Tòa nhà E'],
        ]);
    }
}