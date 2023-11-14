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
        Schema::create('subscriber_details', function (Blueprint $table) {
            $table->id();
            $table->string('full_Name');
            $table->string('email');
            $table->biginteger('id_proof');
            $table->biginteger('phone');
            $table->string('Address');
            $table->dateTime('prefer_visit'); 
            $table->string('Exam_prepare_for');
            $table->string('details');
     
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriber_details');
    }
};
