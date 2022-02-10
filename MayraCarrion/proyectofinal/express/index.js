const express = require('express');
const server = express();
server.use(express.json());

server.get('/leerCliente/:id', function(req,res){
    //res.send('<h1>GET -- leer Cliente</h1>');
    res.json({
        Nombre: 'Richard Altamirano',
        Cedula: '1750280487',
        Genero: 'Masculino',
        Edad: '22',
        Correo: 'ra@gmail.com',
        Telefono: '3113535',
        Direccion: 'El calzado',
        Estado: 'T'
    });   
})
server.post('/ingresarCliente', function(req,res){
    console.log(req.body);
    res.send("<h1> POST -- Cliente GUARDADO  </h1>");
    
})
server.put('/actualizarCliente/:id', function(req,res){
    res.send("<h1> PUT -- Cliente ACTUALIZADO  </h1>")
    
})
server.delete('/eliminarCliente/:id', function(req,res){
    res.send("<h1> DELETE -- Cliente ELIMINADO  </h1>")
    
})
server.listen(4000, function(){
    console.log("Servidor en el puerto 4000");
})