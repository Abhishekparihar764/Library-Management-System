<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\DetailsController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SubscriptionController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/create/admin',[AdminController::class,'create_admin']);
Route::put('/update/admin/{id}',[AdminController::class,'update_admin']);
Route::get('get/admin',[AdminController::class,'admin_get']);


Route::post('/create/member',[AdminController::class,'create_member']);
Route::put('/update/member/{id}',[AdminController::class,'update_member']);
Route::delete('delete/member/{id}',[AdminController::class,'delete_member']);
Route::get('get/member',[AdminController::class,'member_get']);






Route::post('/create/author',[AuthorController::class,'create_Author']);
Route::put('/update/author/{id}',[AuthorController::class,'update_Author']);
Route::delete('delete/author/{id}',[AuthorController::class,'delete_Author']);
Route::get('get/author',[AuthorController::class,'Author_get']);



Route::post('/create/publisher',[AuthorController::class,'create_Publisher']);
Route::put('/update/publisher/{id}',[AuthorController::class,'update_Publisher']);
Route::delete('delete/publisher/{id}',[AuthorController::class,'delete_Publisher']);
Route::get('get/publisher',[AuthorController::class,'Publisher_get']);



Route::post('/create/book',[BookController::class,'create_Book']);
Route::put('/update/book/{id}',[BookController::class,'update_Book']);
Route::delete('delete/book/{id}',[BookController::class,'delete_Book']);
Route::get('get/book',[BookController::class,'Book_get']);





Route::post('/create/issue_book',[BookController::class,'create_Issue_book']);
Route::put('/update/issue_book/{id}',[BookController::class,'update_Issue_book']);
Route::delete('delete/issue_book/{id}',[BookController::class,'delete_Issue_book']);
Route::get('get/issue_book',[BookController::class,'Issue_book_get']);




Route::post('/create/member_detail',[DetailsController::class,'create_Member_detail']);
Route::put('/update/member_detail/{id}',[DetailsController::class,'update_Member_detail']);
Route::delete('delete/member_detail/{id}',[DetailsController::class,'delete_Member_detail']);
Route::get('get/member_detail',[DetailsController::class,'Member_detail_get']);



Route::post('/create/subscriber_detail',[DetailsController::class,'create_Subscriber_detail']);
Route::put('/update/subscriber_detail/{id}',[DetailsController::class,'update_Subscriber_detail']);
Route::delete('delete/subscriber_detail/{id}',[DetailsController::class,'delete_Subscriber_detail']);
Route::get('get/subscriber_detail',[DetailsController::class,'Subscriber_detail_get']);



Route::post('/create/enquiry',[EnquiryController::class,'create_Enquiry']);
Route::put('/update/enquiry/{id}',[EnquiryController::class,'update_Enquiry']);
Route::delete('delete/enquiry/{id}',[EnquiryController::class,'delete_Enquiry']);
Route::get('get/enquiry',[EnquiryController::class,'Enquiry_get']);




Route::post('/create/subscription',[SubscriptionController::class,'create_Subscription']);
Route::put('/update/subscription/{id}',[SubscriptionController::class,'update_Subscription']);
Route::delete('delete/subscription/{id}',[SubscriptionController::class,'delete_Subscription']);
Route::get('get/subscription',[SubscriptionController::class,'Subscription_get']);



Route::post('/create/subscription_plan',[SubscriptionController::class,'create_Subscription_plan']);
Route::put('/update/subscription_plan/{id}',[SubscriptionController::class,'update_Subscription_plan']);
Route::delete('delete/subscription_plan/{id}',[SubscriptionController::class,'delete_Subscription_plan']);
Route::get('get/subscription_plan',[SubscriptionController::class,'Subscription_plan_get']);




Route::post('register',[LoginController::class,'register']);
Route::post('login',[LoginController::class,'login']);


Route::post('logout',[LoginController::class,'logout'])->middleware('auth:sanctum');
Route::post('change_password',[LoginController::class,'change_password'])->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

    