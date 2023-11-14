<?php

namespace App\Http\Controllers;


use Exception;
use validator;
use App\Models\admin;
use App\Models\member;
use Illuminate\Http\Request;

class AdminController extends Controller
{
   
        public function create_admin(Request $request)
        {
            try
            {
                    $Admin= new admin;
                    $Admin->admin_name=$request->admin_name;
                    $Admin->admin_email=$request->admin_email;
                    $Admin->admin_phone=$request->admin_phone;
                    $Admin->admin_education=$request->admin_education;
                    $Admin->admin_address=$request->admin_address;
                    $Admin->remark=$request->remark;
                    $Admin->save();
    
                    return response()->json(['message'=>'Admin details added Successfully',
                    'Admin'=>$Admin,'Status'=>200]);
            }
    
            catch(Exception $e)
                    {
                        return response()->json(['message'=>'details submission Failed',
                    'Admin'=>$Admin,'Status'=>200,'error'=>$e]);
                    }
        }
    
        // UPDATE DATA FROM User TABLE THROUGH PUT API
        function update_admin(request $request){
            $Admin=admin::find($request->id);
            $Admin->admin_name=$request->admin_name;
            $Admin->admin_email=$request->admin_email;
            $Admin->admin_phone=$request->admin_phone;
            $Admin->admin_education=$request->admin_education;
            $Admin->admin_address=$request->admin_address;
            $Admin->remark=$request->remark;
            $result=$Admin->save();
            if($result){
                return["result"=>"data updation successful"];
            }
        else {
            return["result"=>"data updation failed"];
        }
        }
    
        // delete DATA FROM ADMIN TABLE THROUGH delete API
       
    
    
    function admin_get(){
        return admin::all();
    }
    

//Member

public function  create_member(Request $request)
{
  try 
  {

    $Member=new member;
    $Member->member_id=$request->member_id;
    $Member->full_name=$request->full_name;
    $Member->email=$request->email;
    $Member->phone=$request->phone;
    $Member->date=$request->date;
    $Member->id_proof=$request->id_proof;
    $Member->Address=$request->Address;
    $Member->status=$request->status;
    $Member->save();


    return response()->json(['message'=>'Member added Sucessfully',
    'Member'=>$Member,'Status'=>200]);
  }
    catch(Exception $e)
    {
        return response()->json(['message'=>'details submission Failed',
        'Member'=>$Member,'Status'=>200,'error'=>$e]);

    }
}
public function update_member(Request $request, $id)
{
    try {
        $data = $request->validate([
            'member_id' => 'required',
            'full_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'date' => 'required',
            'id_proof' => 'required',
            'Address' => 'required',
            'status' => 'required',
        ]);

        $member = Member::findOrFail($id);
        $member->fill($data);
        $result = $member->save();

        if ($result) {
            return response()->json([
                'result' => 'Data updation successful',
                'status' => 200,
            ]);
        } else {
            return response()->json([
                'result' => 'Data updation failed',
                'status' => 500,
            ]);
        }
    } catch (\Exception $e) {
        return response()->json([
            'result' => 'Data updation failed',
            'error' => $e->getMessage(),
            'status' => 500,
        ]);
    }
}


// delete DATA FROM ADMIN TABLE THROUGH delete API
function delete_member($id){
    $Member=member::find($id);
    $result=$Member->delete();
    if($result){
         return["result"=>"data deletion Sucessful"];
}
else {
    return["result"=>"data deletion failed"];
}

}

function member_get(){
return member::all();
}


   






}
