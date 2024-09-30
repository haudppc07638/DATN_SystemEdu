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
        Schema::create('major_classes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('training_system');
            $table->string('name');
            $table->integer('quantity');
            $table->foreignId('major_id')->constrained('majors');
            $table->foreignId('employee_id')->constrained('employees');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('major_classes');
    }
};
