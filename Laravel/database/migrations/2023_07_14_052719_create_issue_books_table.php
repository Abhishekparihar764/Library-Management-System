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
        Schema::create('issue_books', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('Librarian_name');
           $table->dateTime('issue_date');
           $table->string('Member_id');
           $table->string('Book_name');
            $table->dateTime('return_date');
            $table->integer('fine_amount')->nullable();
            $table->string('Return')->nullable();
          
        
        });
    }

    /**
     * Reverse the migrations.  
     */
    public function down(): void
    {
        Schema::dropIfExists('issue_books');
    }
};
