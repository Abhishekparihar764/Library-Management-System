<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class member_detail extends Model
{
    protected $fillable = [
        'full_Name',
        'email',
        'Date',
        'id_proof',
         'phone',
         'Address',
         'Book_name',
          'Author',
          'prefer_Newspaper',
          'year_of_Newspaper'
    ];
    public $timestamps = false;

  



}

