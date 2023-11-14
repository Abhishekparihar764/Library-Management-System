<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class issue_book extends Model
{
    use HasFactory;

    protected $fillable = [
      'Librarian_name',
      'issue_date',
      'Member_id',
      'Book_name',
      'return_date',
      'fine_amount',
       'Return'

    ];
    
    public $timestamps = false;


    
}
