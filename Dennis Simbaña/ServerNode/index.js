const express = require('express');
const server = express();

server.get('/', function(req,res){
    res.send("<h1>GET con express</h1>");
})
server.post('/ingresarUsuario', function(req,res){
    res.send("<h1>POST ingreso de Usuario</h1>");
})
server.put('/actualizarUsuario', function(req,res){
    res.send("<h1>PUT actualizar usuario </h1>");
})
server.delete('/eliminarUsuario', function(req,res){
    res.send("<h1>DELETE eliminar usuario</h1>");
})

server.listen(3000, function(){
    console.log("server en el puerto 300");
})