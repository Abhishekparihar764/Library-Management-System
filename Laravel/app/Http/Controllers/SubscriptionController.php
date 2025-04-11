<?php

namespace App\Http\Controllers;

use Exception;
use validator;

use App\Models\Subscription_plan;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    
    
    // API FOR Subscription_plan:-
    
    
    
    public function create_Subscription_plan(Request $request)
    {
        try
        {
                $Subscription_plan= new subscription_plan;
                $Subscription_plan->sub_id=$request->sub_id;
                $Subscription_plan->sub_name=$request->sub_name;
                $Subscription_plan->active_plan=$request->active_plan;
                $Subscription_plan->ending_date=$request->ending_date;
                $Subscription_plan->duration=$request->duration;
                $Subscription_plan->status=$request->status;
                
               
                $Subscription_plan->save();
    
                return response()->json(['message'=>'Subscription_plan details added Successfully',
                'Subscription_plan'=>$Subscription_plan,'Status'=>200]);
        }
    
        catch(Exception $e)
                {
                    return response()->json(['message'=>'details submission Failed',
                'Subscription_plan'=>$Subscription_plan,'Status'=>200,'error'=>$e]);
                }
    }
    
    // UPDATE DATA FROM User TABLE THROUGH PUT API
    function update_Subscription_plan(request $request){
        $Subscription_plan= subscription_plan::find($request->id);
        $Subscription_plan->sub_id=$request->sub_id;
        $Subscription_plan->sub_name=$request->sub_name;
        $Subscription_plan->active_plan=$request->active_plan;
        $Subscription_plan->ending_date=$request->ending_date;
        $Subscription_plan->duration=$request->duration;
        $Subscription_plan->status=$request->status;
                
        
        $result=$Subscription_plan->save();
        if($result){
            return["result"=>"data updation successful"];
        }
    else {
        return["result"=>"data updation failed"];
    }
    }
    
    // delete DATA FROM ADMIN TABLE THROUGH delete API
    function delete_Subscription_plan($id){
        $Subscription_plan= subscription_plan::find($id);
        $result=$Subscription_plan->delete();
        if($result){
             return["result"=>"data deletion Sucessful"];
    }
    else {
        return["result"=>"data deletion failed"];
    }
    
    }
    
    function Subscription_plan_get(){
        return subscription_plan::all();
    
    }
}
