<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class publisher extends Model
{
    use HasFactory;

    protected $fillable = [
        'publisher_name',
        'book_published'
    ];


    public function books()
    {
        return $this->hasMany(Book::class);
    }
     

}
