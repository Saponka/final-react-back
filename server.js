const express = require('express');
require('dotenv').config();
PORT = process.env.PORT || 8080;
const  cors = require ('cors');
//Conexión a la DB de Mongo local//

require('./database/conexion');
//////controllers//////

const UserController = require('./controllers/register');
const LoginController = require('./controllers/login');
const ProductoController = require('./controllers/productos');
const ProveedorController = require('./controllers/proveedores');
const EmpleadoController = require ('./controllers/empleados');
const ClienteController = require('./controllers/clientes');
//////express////////

const app = express();
//////middalwares/////
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); //{origin:'http://localhost:3000'}

/////////register con passwordhash///////////
app.post('/registro', async (req,res)=>{
    await UserController.create(req,res);
})
////////////login//////////////
app.post('/login',async (req,res)=>{
    await LoginController.findOne(req,res);
})
//////////Endpoints:Crear///////Endpoints:update///////////
app.post('/crearProducto', async (req, res) => {
    const {codigo,nombre,marca,stock,precio}= req.body;
    try{
         const producto = await ProductoController.findByCodigo(codigo);
         if(producto){
         await ProductoController.update(producto._id,{codigo,nombre,marca,stock,precio});
         res.status(200).json('Producto editado y guardado');
    }else{
         await ProductoController.create(req.body);
         res.status(200).json('Producto Creado y guardado en DB');
    }
    }catch(error){ res.status(400).json(error)}
});
app.post('/crearProveedor', async (req, res) => {
    const {cuit,apellido,empresa,nombre,pagos,envios} = req.body;
    console.log(req.body);
    try{
        const proveedor = await ProveedorController.findByCuit(cuit);
        if(proveedor){
            await ProveedorController.update(proveedor._id,{cuit,nombre,apellido,empresa,pagos,envios});
            res.status(200).json('Producto editado y guardado');
        }else{
            await ProveedorController.create(req.body);
            res.json('Proveedor Creado y guardado en DB');
        }
    }catch(error){res.status(400).json(error)} 
});
app.post('/crearEmpleado', async (req, res) => {
    const {dni,nombre,apellido,cuit,cargo,direccion,telefono,descripcion} = req.body;
    console.log(req.body);
    try{
        const empleado = await EmpleadoController.findByDni(dni);
        if(empleado){
            await EmpleadoController.update(empleado._id,{dni,nombre,apellido,cuit,cargo,direccion,telefono,descripcion});
            res.status(200).json('Empleado editado y guardado');
        }else{
            await EmpleadoController.create(req.body);
            res.json('Empleado Creado y guardado en DB');
        }
    }catch(error){
        res.status(400).json(error)
    }
   
});
app.post('/crearCliente', async (req, res) => {
    const {dni,nombre,apellido,producto,descripcion} = req.body;
    console.log(req.body);
    try{
        const cliente = await ClienteController.findByDni(dni);
        if(cliente){
            await ClienteController.update(cliente._id,{dni,nombre,apellido,producto,descripcion});
            res.status(200).json('Cliente editado y guardado');
        }else{
            await ClienteController.create(req.body);
            res.json('Cliente Creado y guardado en DB');
        }
    }catch(error){
        res.status(400).json(error)
    }  
});
/////////////Endpoints:delete/////////////
app.delete('/eliminar/:id', async(req,res)=>{
    const {id} = req.params;
    await ProductoController.delete(id);
    res.json('Eliminado con exito')
});
app.delete('/eliminarProveedor/:id', async(req,res)=>{
    const {id} = req.params;
    await ProveedorController.delete(id);
    res.json('Eliminado con exito')
})
app.delete('/eliminarCliente/:id', async(req,res)=>{
    const {id} = req.params;
    await ClienteController.delete(id);
    res.json('Eliminado con exito')
})
app.delete('/eliminarEmpleado/:id', async(req,res)=>{
    const {id} = req.params;
    await EmpleadoController.delete(id);
    res.json('Eliminado con exito')
})
///////////////Endpoints:GET/////////////////listas
app.get('/', async (req, res) => {
    res.json({
        users: await LoginController.findAll()
    });
});
app.get('/productos', async (req, res) => {
    res.json({
        producto: await ProductoController.findAll()
    });
});
app.get('/proveedores', async (req, res) => {
    res.json({
        proveedor: await ProveedorController.findAll()
    });
}); 
app.get('/clientes', async (req, res) => {
    res.json({
        cliente: await ClienteController.findAll()
    });
}); 
app.get('/empleados', async (req, res) => {
    res.json({
        empleado: await EmpleadoController.findAll()
    });
}); 

/////////////////listen port///////////////
app.listen(PORT,()=>{
    console.log(`Servidor Corriendo en el Puerto: ${PORT}`);
});
app.on("error",(error)=>{
    console.log(`Error: ${error}`);
});