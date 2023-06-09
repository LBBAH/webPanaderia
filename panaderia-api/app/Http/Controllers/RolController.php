<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRolRequest;
use App\Http\Requests\UpdateRolRequest;
use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Rol::all(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRolRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRolRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function show(Rol $rol)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function edit(Rol $rol)
    {
        //
    }

  

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rol $rol)
    {
        
    }

    public function addRol(Request $request){        
        $privilegio = new Rol;    

        $repetido = Rol::select('rol')->where('rol', $request->rol)->get();        

        if(count($repetido) != 1){            
            $privilegio -> rol = $request->rol;           
            $privilegio -> Description = $request->Description;           
            
            $privilegio -> save();
            
            return response()->json(['success' => 'Rol añadido'], 200);                
               
        }else{
            return response()->json(['error' => 'Rol ya existe'], 200);
        }
        
    }

    public function deleteRol($id){
        $privilegio = Rol::find($id);

        $res = Rol::select('rols.id')
        ->whereIn('rols.id', function($query){
            $query->select('typeUser')->from('users');
        })->where('id', $id)->get();

        if(count($res)){
            return response()->json(['error'=>'No se puede eliminar ya que afecta a otros registros'], 200);
        }else{
            $privilegio->delete();
            return response()->json(['success'=>'eliminado con exito'], 200);
        }
    }

     
    public function actualizarRol(Request $request, $id)
    {
        $rol = Rol::findOrFail($id);

        if(is_null($rol)){
            return response(['error'=>'Error al actualizar'],200);
        }
        
        $rol->update(request()->all());
        return response(['success'=>'Actualizado'],200);
    }
}
