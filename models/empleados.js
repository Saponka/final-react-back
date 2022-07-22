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
    cuit:{
        type: 'String',
        required: true,
    },
    cargo:{
        type: 'String',
        required: true,
    },
    direccion:{
        type: 'String',
        required: true,
    },
    telefono:{
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
const Empleado = mongoose.model('empleado', schema);
module.exports = Empleado