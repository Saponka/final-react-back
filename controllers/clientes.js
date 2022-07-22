const Cliente = require('../models/clientes');

class ClienteController {
    constructor(){}

    async findAll() {
        try {
            return await Cliente.find().lean();
        } catch (error) {
            throw error;
        }
    }
    async create(cliente) {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw error;
        }
    }
    async findByDni(dni){
        try{
        return await Cliente.findOne({dni: dni})
        }catch (error) {
            throw error;
        }
    }
    async update (id,cliente){
        try{
            return await Cliente.findByIdAndUpdate(id, cliente)
        } catch(error){
            throw error
        }
    }
    async delete(id){
        try{
            return await Cliente.findByIdAndDelete(id);
        }catch(error){
            throw error
        }
    }
};
module.exports = new ClienteController();