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
    direccion:{
        type: 'String',
        required: true,
    },
    telefono:{
        type: 'String',
        required: true,
    },
    curso:{
        type: 'String',
        required: true,
    },
    año:{
        type: 'String',
        required: true,
    },
    promedio:{
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

const Alumnos = mongoose.model('alumno', schema);

module.exports = Alumnos;