<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class admin extends Model
{
    use HasFactory;
 protected $table="admin";
    protected $fillable = [
      'admin_name',
      'admin_email',
      'admin_phone',
      'admin_education',
      'admin_address',
        'remark'
      ];
      
    }