//lamamos a mongoose
const mongoose = require('mongoose');
//creamos un esquema de Documento de mongoose 
const schema = mongoose.Schema({
    
    nombre: {
        type: 'String',
        required: true,
    },
    marca:{
        type: 'String',
        required: true,
    },
    stock:{
        type: 'String',
        required: true,
    },
    precio:{
            type: 'String',
            require: true,
    },
    codigo:{
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
// la variable Persona es el modelo de persona que creamos con mongoose 1°parametro:'nombre del documento'2°parametro:variable schema
const Producto = mongoose.model('producto', schema);
//exportamos Persona a persona.js en controllers
module.exports = Producto;