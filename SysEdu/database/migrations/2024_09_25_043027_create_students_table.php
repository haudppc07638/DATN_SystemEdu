<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('full_name');
            $table->string('code')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->string('image')->nullable();
            $table->enum('status', ['active', 'inactive', 'graduated'])->default('active');
            $table->foreignId('major_id')->constrained('majors');
            $table->foreignId('major_class_id')->constrained('major_classes');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
