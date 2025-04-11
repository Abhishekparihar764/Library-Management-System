<?php

namespace App\Http\Controllers;  

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
    {
    
    public function register(Request $request){
        $request->validate([
            'name'=> 'required',
            'email'=> 'required|email',
            'password'=> 'required|confirmed',
            'tc'=> 'required',         

        ]);  

        if(User::where('email',$request->email)->first()){
            return response([
                'message' => 'Email already exists',
                'status'=> 'failed'
            ],200);
        }

        $user=User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'tc' => json_decode($request->tc),

        ]);
        $token =$user->createToken($request->email)->plainTextToken;

        return response([
            'token'=>   $token,
            'message' => 'Registration succesfully Done',
            'status' => 'success'
        ],201);
    }

    public function login(Request $request){
    $request->validate([
        'email' => 'required| email',
        'password' => 'required',
    ]);

    $user= User::where('email',$request->email)->first();
    if($user && Hash::check($request->password, $user->password)){
        $token =$user->createToken($request->email)->plainTextToken;

        return response([
            'token'=>   $token,
            'message' => 'Login succeed',
            'status' => 'success'
        ],200);
    }

    return response([
        'message' => 'The  provided crendentials are incorrect.',
        'Status' => 'failed'
    ],401);
    }


    public  function logout(){
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Success' ,   
            'status' => '   success'
        ],200);
    }



    public function change_password(Request $request){
    $request->validate([
        'password' => 'required|confirmed',
    ]);
    $user = auth()->user();
    $user->password = Hash::make($request->password);
    $user->save();
    return  response([
        'message' => 'password changed Succesfully',
        'status' => 'successed',
    ],200);


    }
    }
