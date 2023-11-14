<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subscriber_detail extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'id_proof',
        'phone',
        'Address',
        'prefer_visit',
        'Exam_prepare_for',
        'details'
    ];

   public $timestamps = false;

   
}
