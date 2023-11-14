<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class enquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'enq_name',
        'enq_email',
        'message',
        'date'
    ]; 

    public $timestamps = false;

    
}
