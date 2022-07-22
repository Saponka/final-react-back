const Empleado = require('../models/empleados');

class EmpleadoController {
    constructor(){}

    async findAll() {
        try {
            return await Empleado.find().lean();
        } catch (error) {
            throw error;
        }
    }
    async create(empleado) {
        try {
            return await Empleado.create(empleado);
        } catch (error) {
            throw error;
        }
    }
    async findByDni(dni){
        try{
        return await Empleado.findOne({dni: dni})
        }catch (error) {
            throw error;
        }
    }
    async update(id,empleado){
        try{
            return await Empleado.findByIdAndUpdate(id, empleado)
        } catch(error){
            throw error
        }
    }
    async delete(id){
        try{
            return await Empleado.findByIdAndDelete(id);
        }catch(error){
            throw error
        }
    }
};
module.exports = new EmpleadoController();