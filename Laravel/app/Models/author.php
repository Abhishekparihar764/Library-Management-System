<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class author extends Model
{
    use HasFactory;
   
   protected $fillable = [
    'author_name',
    'book_written',
];

public function books()
{
    return $this->hasMany(Book::class);
}


}