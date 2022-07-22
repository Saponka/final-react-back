//lamamos a mongoose
const mongoose = require('mongoose');
//creamos un esquema de Documento de mongoose 
const schema = mongoose.Schema({
    
    nombre: {
        type: 'String',
        required: true,
    },
    apellido:{
        type: 'String',
        required: true,
    },
    empresa:{
        type: 'String',
        required: true,
    },
    cuit:{
        type: 'String',
        required: true,
    },
    pagos:{
        type: 'String',
        required: true,
    },
    envios:{
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
// la variable Persona es el modelo de persona que creamos con mongoose 1°parametro:'nombre del documento'2°parametro:variable schema
const Proveedor = mongoose.model('proveedor', schema);
//exportamos Persona a persona.js en controllers
module.exports = Proveedor;