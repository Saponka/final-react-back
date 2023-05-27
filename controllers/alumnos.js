const Alumno = require('../models/alumnos');

class AlumnoController {
    constructor(){}

    async findAll() {
        try {
            return await Alumno.find().lean();
        } catch (error) {
            throw error;
        }
    }
    async create(alumnno) {
        try {
            return await Alumno.create(alumnno);
        } catch (error) {
            throw error;
        }
    }
    async findByDni(dni){
        try{
        return await Alumno.findOne({dni: dni})
        }catch (error) {
            throw error;
        }
    }
    async update (id,alumnno){
        try{
            return await Alumno.findByIdAndUpdate(id, alumnno)
        } catch(error){
            throw error
        }
    }
    async delete(id){
        try{
            return await Alumno.findByIdAndDelete(id);
        }catch(error){
            throw error
        }
    }
};
module.exports = new AlumnoController();