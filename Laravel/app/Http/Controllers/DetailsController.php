<?php

namespace App\Http\Controllers;

use Exception;
use validator;
use App\Models\member_detail;
use App\Models\subscriber_detail;
use Illuminate\Http\Request; 

class DetailsController extends Controller
{
    public function create_Member_detail(Request $request)
    {
        try
        {
                $Member_detail= new member_detail;
                $Member_detail->full_Name=$request->full_Name;
                $Member_detail->email=$request->email;
                $Member_detail->Date=$request->Date;
                $Member_detail->id_proof=$request->id_proof;
                $Member_detail->phone=$request->phone;
                $Member_detail->Address=$request->Address;
                $Member_detail->Book_name=$request->Book_name;
                $Member_detail->Author=$request->Author;
                $Member_detail->prefer_Newspaper=$request->prefer_Newspaper;
                $Member_detail->year_of_Newspaper=$request->year_of_Newspaper;
                $Member_detail->save();

                return response()->json(['message'=>'Member details added Successfully',
                'Member_detail'=>$Member_detail,'Status'=>200]);
        }

        catch(Exception $e)
                {
                    return response()->json(['message'=>'details submission Failed',
                'Member_detail'=>$Member_detail,'Status'=>200,'error'=>$e]);
                }
    }

    // UPDATE DATA FROM User TABLE THROUGH PUT API
    function update_Member_detail(request $request){
        $Member_detail=member_detail::find($request->id);
        $Member_detail->full_Name=$request->full_Name;
        $Member_detail->email=$request->email;
        $Member_detail->Date=$request->Date;
        $Member_detail->id_proof=$request->id_proof;
        $Member_detail->phone=$request->phone;
        $Member_detail->Address=$request->Address;
        $Member_detail->Book_name=$request->Book_name;
        $Member_detail->Author=$request->Author;
        $Member_detail->prefer_Newspaper=$request->prefer_Newspaper;
        $Member_detail->year_of_Newspaper=$request->year_of_Newspaper;
       
        $result=$Member_detail->save();
        if($result){
            return["result"=>"data updation successful"];
        }
    else {
        return["result"=>"data updation failed"];
    }
    }

    // delete DATA FROM ADMIN TABLE THROUGH delete API
    function delete_Member_detail($id){
        $Member_detail=member_detail::find($id);
        $result=$Member_detail->delete();
        if($result){
             return["result"=>"data deletion Sucessful"];
  }
    else {
        return["result"=>"data deletion failed"];
    }

}

function Member_detail_get(){
    return member_detail::all();
}


// API FOR PUBLISHER:-



public function create_Subscriber_detail(Request $request)
{
    try
    {
            $Subscriber_detail= new subscriber_detail;
            $Subscriber_detail->full_name=$request->full_name;
            $Subscriber_detail->email=$request->email;
            $Subscriber_detail->id_proof=$request->id_proof;
            $Subscriber_detail->phone=$request->phone;
            $Subscriber_detail->Address=$request->Address;
            $Subscriber_detail->prefer_visit=$request->prefer_visit;
            $Subscriber_detail->Exam_prepare_for=$request->Exam_prepare_for;
            $Subscriber_detail->details=$request->details;
            
           
            $Subscriber_detail->save();

            return response()->json(['message'=>'Subscriber details added Successfully',
            'Subscriber_detail'=>$Subscriber_detail,'Status'=>200]);
    }

    catch(Exception $e)
            {
                return response()->json(['message'=>'details submission Failed',
            'Subscriber_detail'=>$Subscriber_detail,'Status'=>200,'error'=>$e]);
            }
}

// UPDATE DATA FROM User TABLE THROUGH PUT API
function update_Subscriber_detail(request $request){
    $Subscriber_detail= subscriber_detail::find($request->id);
    $Subscriber_detail->full_name=$request->full_name;
    $Subscriber_detail->email=$request->email;
    $Subscriber_detail->id_proof=$request->id_proof;
    $Subscriber_detail->phone=$request->phone;
    $Subscriber_detail->Address=$request->Address;
    $Subscriber_detail->prefer_visit=$request->prefer_visit;
    $Subscriber_detail->Exam_prepare_for=$request->Exam_prepare_for;
    $Subscriber_detail->details=$request->details;
    
    $result=$Subscriber_detail->save();
    if($result){
        return["result"=>"data updation successful"];
    }
else {
    return["result"=>"data updation failed"];
}
}

// delete DATA FROM ADMIN TABLE THROUGH delete API
function delete_Subscriber_detail($id){
    $Subscriber_detail= subscriber_detail::find($id);
    $result=$Subscriber_detail->delete();
    if($result){
         return["result"=>"data deletion Sucessful"];
}
else {
    return["result"=>"data deletion failed"];
}

}

function Subscriber_detail_get(){
    return subscriber_detail::all();

 }
}
