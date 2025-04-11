<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class member extends Model
{
    use HasFactory;


    protected $fillable = [

        'member_id',
        'full_name',
        'email',
        'phone',
        'date',
        'id_proof',
        'Address',
        'status'
        
    ];
    public $timestamps = false;


  


}
