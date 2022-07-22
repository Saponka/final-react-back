const Producto = require('../models/productos');

class ProductoController {
    constructor(){}

    async findAll() {
        try {
            return await Producto.find().lean();
        } catch (error) {
            throw error;
        }
    }
    async create(producto) {
        try {
            return await Producto.create(producto);
        } catch (error) {
            throw error;
        }     
    }
    //buscar por codigo//
     async findByCodigo(codigo){
        try{
            return await Producto.findOne({codigo: codigo});
        }catch (error) {
            throw error;
        } 
    }
    async update (id,producto){ 
        try{
            return await Producto.findByIdAndUpdate(id, producto)
        } catch(error){
            throw error
        }
    }
    async delete(id){
        try{
            return await Producto.findByIdAndDelete(id);
        }catch(error){
            throw error
        }
    }    
};
module.exports = new ProductoController();