<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(Request $request){    

        $login = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);
        

        if(!Auth::guard()->attempt($login)){
            return response()->json(['message' => 'Usuario no encontrado'], 404);        
        }
        
        /**
         * @var User $user
         */

        $user= Auth::user();

        $token =$user->createToken($user->name);

        return response([
            'id'=>$user->id,
            'name'=>$user->name,
            'nameUser'=>$user->nameUser,
            'email'=>$user->email,
            'phone'=>$user->phone,
            'token'=>$token->accessToken,
            'token_expies_at'=>$token->token->expires_at,
        ],200);


        /*$repetido = User::select('password')->where('email', $request->email)->get();
        
        if(count($repetido) === 1){
            return response()->json( $repetido, 200);
        }else{
            return response()->json(['message' => 'La cuenta no existe o mal ingresada'], 200);
        }*/
    }

    public function logout(Request $request){
        $this->validate($request,[
            'allDevice' =>'required|boolean'
        ]);

        /**
         * @var user $user
         */

        $user =Auth::user();

        if($request->allDevice){
            $user->tokens->each(function($token){
                $token->delete();
            });
            return response (['message'=>'Sesion cerrada'],200);
        }

        $userToken = $user->token();
        $userToken->delete();
        return response (['message'=>'Sesion cerrada'],200);
    }
}
