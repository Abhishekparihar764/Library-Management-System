<?php

namespace App\Http\Controllers;

use Exception;
use validator;
use App\Models\enquiry; 
use Illuminate\Http\Request;


class EnquiryController extends Controller
{
    public function create_Enquiry(Request $request)
    {
        try
        {
                $Enquiry= new enquiry;
                $Enquiry->enq_name=$request->enq_name;
                $Enquiry->enq_email=$request->enq_email;
                $Enquiry->message=$request->message;
                $Enquiry->date=$request->date;
                
               
                $Enquiry->save();

                return response()->json(['message'=>'Enquiry details added Successfully',
                'Enquiry'=>$Enquiry,'Status'=>200]);
        }

        catch(Exception $e)
                {
                    return response()->json(['message'=>'details submission Failed',
                'Enquiry'=>$Enquiry,'Status'=>200,'error'=>$e]);
                }
    }

    // UPDATE DATA FROM User TABLE THROUGH PUT API
    function update_Enquiry(request $request){
        $Enquiry= enquiry::find($request->id);
        $Enquiry->enq_name=$request->enq_name;
        $Enquiry->enq_email=$request->enq_email;
        $Enquiry->message=$request->message;
        $Enquiry->date=$request->date;
                
       
        $result=$Enquiry->save();
        if($result){
            return["result"=>"data updation successful"];
        }
    else {
        return["result"=>"data updation failed"];
    }
    }

    // delete DATA FROM ADMIN TABLE THROUGH delete API
    function delete_Enquiry($id){
        $Enquiry= enquiry::find($id);
        $result=$Enquiry->delete();
        if($result){
             return["result"=>"data deletion Sucessful"];
  }
    else {
        return["result"=>"data deletion failed"];
    }

}

function Enquiry_get(){
    return enquiry::all();
}

}

