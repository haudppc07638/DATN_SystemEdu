<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 1; $i <= 80; $i++) { // Giả định bạn muốn thêm 80 sinh viên (20 cho mỗi lớp)
            DB::table('students')->insert([
                'full_name' => $faker->name,
                'date_of_birth' => $faker->date,
                'gender' => $faker->numberBetween(0, 1), // 0 hoặc 1 cho giới tính
                'nation' => 'Kinh',
                'email' => $faker->unique()->safeEmail,
                'code' => 'STU' . str_pad($i, 3, '0', STR_PAD_LEFT), // STU001, STU002, ...
                'phone' => '0' . $faker->numberBetween(900000000, 999999999), // Số điện thoại ngẫu nhiên
                'image' => null, // Hoặc một giá trị mặc định nếu cần
                'identity_card' => $faker->numberBetween(1000000000, 9999999999),
                'card_issuance_date' => $faker->date,
                'card_location' => $faker->city,
                'provice_city' => $faker->city,
                'district' => $faker->word,
                'commune_level' => $faker->word,
                'house_number' => $faker->buildingNumber,
                'sponsor_name' => $faker->name,
                'sponsor_phone' => '0' . $faker->numberBetween(900000000, 999999999),
                'major_id' => 1, // Hoặc ID chuyên ngành bạn muốn
                'major_class_id' => 1, // Hoặc ID lớp chuyên ngành bạn muốn
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
