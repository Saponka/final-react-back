const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    nombre: {
        type: 'String',
        required: true,
    },
    apellido:{
        type: 'String',
        required: true,
    },
    dni:{
        type: 'String',
        required: true,
    },
    producto:{
        type: 'String',
        required: true,
    },
    descripcion:{
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});

const Clientes = mongoose.model('cliente', schema);

module.exports = Clientes;