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
        Schema::create('member_details', function (Blueprint $table) {
            $table->id();
            $table->string('full_Name');
            $table->string('email');
            $table->dateTime('Date');
            $table->biginteger('id_proof');
            $table->biginteger('phone');
            $table->string('Address');
            $table->string('Book_name')->nullable();
            $table->string('Author')->nullable();
            $table->string('prefer_Newspaper')->nullable();
            $table->string('year_of_Newspaper')->nullable();
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_details');
    }
};
