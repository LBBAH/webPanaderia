<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RolController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\Auth\AuthenticationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('products', ProductController::class);


//get all products
Route::get('Products', [ProductController::class, 'index']);

//get specic  
Route::get('Products/{id}', [ProductController::class, 'getProductId']);

//add new 
Route::post('addProducts', [ProductController::class, 'addProducto']);

//update 

Route::post('updateProduct/{id}', [ProductController::class, 'actualizarProducto']);

//delete 
Route::delete('deleteProduct/{id}', [ProductController::class, 'deleteProducto']);

//user
Route::get('/user', function (Request $request) {
    return Auth::user();    
})->middleware('auth:api');

//get all users
Route::get('Usuarios', [UserController::class, 'getUsers']);

//get specic  users
Route::get('Usuarios/{id}', [UserController::class, 'getUserId']);

//add new user
Route::post('addUser', [UserController::class, 'addUser']);


//login user
Route::group(['namespace'=>'App\Http\Controllers\Api\Auth'],function(){    
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
});


//update user
Route::put('updateUser/{id}', [UserController::class, 'updateUser']);

//delete user
Route::get('deleteUser/{id}', [UserController::class, 'deleteUser']);
