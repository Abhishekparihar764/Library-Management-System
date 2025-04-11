<?php

namespace App\Http\Controllers;

use Exception;
use validator;
use App\Models\book; 
use App\Models\issue_book;
use Illuminate\Http\Request;



class BookController extends Controller
{
      public function create_Book(Request $request)
    {
        try
        {
                $Book = new book;
                $Book->book_title=$request->book_title;
                $Book->isbn=$request->isbn;
                $Book->author=$request->author;
                $Book->publisher=$request->publisher;
                $Book->category=$request->category;
                $Book->copies=$request->copies;
                $Book->description=$request->description;
               
                $Book->save();

                return response()->json(['message'=>'Book details added Successfully',
                'Book'=>$Book,'Status'=>200]);
        }

        catch(Exception $e)
                {
                    return response()->json(['message'=>'details submission Failed',
                'Book'=>$Book,'Status'=>200,'error'=>$e]);
                }
    }

    // UPDATE DATA FROM User TABLE THROUGH PUT API
    function update_Book(request $request){
        $Book= book::find($request->id);
        $Book->book_title=$request->book_title;
        $Book->isbn=$request->isbn;
        $Book->author=$request->author;
        $Book->publisher=$request->publisher;
        $Book->category=$request->category;
        $Book->copies=$request->copies;
        $Book->description=$request->description;
        
        $result=$Book->save();
        if($result){
            return["result"=>"data updation successful"];
        }
    else {
        return["result"=>"data updation failed"];
    }
    }

    // delete DATA FROM ADMIN TABLE THROUGH delete API
    function delete_Book($id){
        $Book= book::find($id);
        $result=$Book->delete();
        if($result){
             return["result"=>"data deletion Sucessful"];
  }
    else {
        return["result"=>"data deletion failed"];
    }

}

function Book_get(){
    return book::all();
}


public function search_Books(Request $request)
{
    $keyword = $request->input('keyword');

    $books = book::where('book_title', 'LIKE', "%$keyword%")
                  ->orwhere('isbn', 'LIKE', "%$keyword%")
                  ->orWhere('author', 'LIKE', "%$keyword%")
                  ->orWhere('publisher', 'LIKE', "%$keyword%")
                  ->orWhere('category', 'LIKE', "%$keyword%")
                  ->get();

    return response()->json(['message' => 'Search results for books', 'books' => $books, 'Status' => 200]);
}

public function find_Book($id)
{
    $book = book::find($id);

    if ($book) {
        return response()->json(['message' => 'Book found', 'book' => $book, 'Status' => 200]);
    } else {
        return response()->json(['message' => 'Book not found', 'Status' => 404]);
    }
}



//api for issue_book

public function create_Issue_book(Request $request)
{
    try
    {
            $Issue_book = new issue_book;
            $Issue_book->Librarian_name=$request->Librarian_name;
            $Issue_book->issue_date=$request->issue_date;
            $Issue_book->Member_id=$request->Member_id;
            $Issue_book->Book_name=$request->Book_name;
            $Issue_book->return_date=$request->return_date;
            $Issue_book->fine_amount=$request->fine_amount;
            $Issue_book->Return=$request->Return;
            $Issue_book->save();

            return response()->json(['message'=>'Book details added Successfully',
            'Issue_book'=>$Issue_book,'Status'=>200]);
    }

    catch(Exception $e)
            {
                return response()->json(['message'=>'details submission Failed',
            'Issue_book'=>$Issue_book,'Status'=>200,'error'=>$e]);
            }
}

// UPDATE DATA FROM User TABLE THROUGH PUT API
function update_Issue_book(request $request){
    $Issue_book= issue_book::find($request->id);
    $Issue_book->Librarian_name=$request->Librarian_name;
    $Issue_book->issue_date=$request->issue_date;
    $Issue_book->Member_id=$request->Member_id;
    $Issue_book->Book_name=$request->Book_name;
    $Issue_book->return_date=$request->return_date;
    $Issue_book->fine_amount=$request->fine_amount;
    $Issue_book->Return=$request->Return;
    $result=$Issue_book->save();
    if($result){
        return["result"=>"data updation successful"];
    }
else {
    return["result"=>"data updation failed"];
}
}

// delete DATA FROM ADMIN TABLE THROUGH delete API
function delete_Issue_book($id){
    $Issue_book=issue_book::find($id);
    $result=$Issue_book->delete();
    if($result){
         return["result"=>"data deletion Successful"];
}
else {
    return["result"=>"data deletion failed"];
}

}

function Issue_book_get(){
return issue_book::all();
}




}

