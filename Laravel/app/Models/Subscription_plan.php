<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription_plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'sub_id',
        'sub_name',
        'active_plan',
        'ending_date',
        'duration',
        'status'
      ];

      public $timestamps = false;

      
}
