<?php

namespace App\Http\Controllers;

use Exception;
use validator;
use App\Models\author; 
use App\Models\publisher;
use Illuminate\Http\Request;


class AuthorController extends Controller
{
    public function create_Author(Request $request)
    {
        try
        {
                $Author= new author;
                $Author->author_name=$request->author_name;
                $Author->book_written=$request->book_written;
                
               
                $Author->save();

                return response()->json(['message'=>'Author details added Successfully',
                'Author'=>$Author,'Status'=>200]);
        }

        catch(Exception $e)
                {
                    return response()->json(['message'=>'details submission Failed',
                'Author'=>$Author,'Status'=>200,'error'=>$e]);
                }
    }

    // UPDATE DATA FROM User TABLE THROUGH PUT API
    function update_Author(request $request){
        $Author=author::find($request->id);
        $Author->author_name=$request->author_name;
        $Author->book_written=$request->book_written;
       
        $result=$Author->save();
        if($result){
            return["result"=>"data updation successful"];
        }
    else {
        return["result"=>"data updation failed"];
    }
    }

    // delete DATA FROM ADMIN TABLE THROUGH delete API
    function delete_Author($id){
        $Author=author::find($id);
        $result=$Author->delete();
        if($result){
             return["result"=>"data deletion Sucessful"];
  }
    else {
        return["result"=>"data deletion failed"];
    }

}

function Author_get(){
    return author::all();
}


// API FOR PUBLISHER:-



public function create_Publisher(Request $request)
{
    try
    {
            $Publisher= new publisher;
            $Publisher->publisher_name=$request->publisher_name;
            $Publisher->book_published=$request->book_published;
            
           
            $Publisher->save();

            return response()->json(['message'=>'Publisher details added Successfully',
            'Publisher'=>$Publisher,'Status'=>200]);
    }

    catch(Exception $e)
            {
                return response()->json(['message'=>'details submission Failed',
            'Publisher'=>$Publisher,'Status'=>200,'error'=>$e]);
            }
}

// UPDATE DATA FROM User TABLE THROUGH PUT API
function update_Publisher(request $request){
    $Publisher= publisher::find($request->id);
    $Publisher->publisher_name=$request->publisher_name;
    $Publisher->book_published=$request->book_published;
   
    $result=$Publisher->save();
    if($result){
        return["result"=>"data updation successful"];
    }
else {
    return["result"=>"data updation failed"];
}
}

// delete DATA FROM ADMIN TABLE THROUGH delete API
function delete_Publisher($id){
    $Publisher= publisher::find($id);
    $result=$Publisher->delete();
    if($result){
         return["result"=>"data deletion Sucessful"];
}
else {
    return["result"=>"data deletion failed"];
}

}

function Publisher_get(){
    return publisher::all();

 }

 


 //member 


}