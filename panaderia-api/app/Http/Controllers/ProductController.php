<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::all(), 200);
    }
    public function addProducto(Request $request){        
        $producto = new Product;    

        $repetido = Product::select('name')->where('name', $request->name)->get();        

        if(count($repetido) != 1){            
            $producto -> name = $request->name;   
            $producto -> price = $request->price;        
            $producto-> description = $request->description;           
            
            $producto -> save();
            
            return response()->json(['success' => 'producto añadido'], 200);                
               
        }else{
            return response()->json(['error' => 'el producto ya existe'], 200);
        }
        
    }

    public function deleteProducto($id){
        $producto = Product::find($id);

        $res = Product::select('products.id')
        ->whereIn('products.id', function($query){
            $query->select('name')->from('products');
        })->where('id', $id)->get();

        if(count($res)){
            return response()->json(['error'=>'No se puede eliminar'], 200);
        }else{
            $producto->delete();
            return response()->json(['success'=>'eliminado con exito'], 200);
        }
    }

     
    public function actualizarProducto(Request $request, $id)
    {
        $producto = Product::findOrFail($id);

        if(is_null($producto)){
            return response(['error'=>'Error al actualizar'],200);
        }
        
        $producto->update(request()->all());
        return response(['success'=>'Actualizado'],200);
    }





    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json(null, 204);
    }



    public function getProducts(){
        return response()->json(Product::all(), 200);
    }

    public function getProductId($id){
        $product = Product::find($id);

        if(is_null($product)) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        return response()->json($product::find($id),200);
    }

    public function addProduct(Request $request){        
        $product = new Product;    

        $repetido = Product::select('name')->where('name', $request->name)->get();
        

        if(count($repetido) != 1){
            $product -> name = $request->name;
            $product -> price = $request->price;
            $product -> description = $request->description;

            
            $product -> save();
            
            return response()->json(['success' => 'Producto registrado con exito'], 200);                
        }else{
            return response()->json(['error' => 'Nombre de producto ya registrado'], 200);
        }

        
    }

    public function updateProduct(Request $request, $id){
        $product = Product::findOrFail($request->$id);
        $product -> name = $request->name;
        $product -> price = $request->price;
        $product -> description = $request->description;


        $product -> save();
        return response()->json(['success' => 'Producto registrado con exito'], 200);                
        //return response()->json($product,200);
    }

    public function deleteProduct(Request $request, $id){
        $products = Product::find($id);

        if(is_null($products)) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $products->delete();
        return response()->json(null, 204);
    }
}

