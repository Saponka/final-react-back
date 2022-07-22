const Proveedor = require('../models/proveedores');

class ProveedorController {
    constructor(){}

    async findAll() {
        try {
            return await Proveedor.find().lean();
        } catch (error) {
            throw error;
        }
    }
    async create(proveedor) {
        try {
            return await Proveedor.create(proveedor)
        }
        catch (error) {
            throw error;
        }
        
    }
    //buscar cor cuit//
    async findByCuit(cuit){
        try{
            return await Proveedor.findOne({cuit: cuit});
        }catch (error) {
            throw error;
        } 
    }
    async update(id,proveedor){
        try{
            return await Proveedor.findByIdAndUpdate(id, proveedor)
        } catch(error){
            throw error
        }
    }
    async delete(id){
        try{
            return await Proveedor.findByIdAndDelete(id);
        }catch(error){
            throw error
        }
    }
};
module.exports = new ProveedorController();