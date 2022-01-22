/*
const math = require('./math');
console.log(math);
*/
/*
const http = require('http');
const colors = require('colors');
const funcionServidor = function(req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1> Hello world </h1>');
    res.end();
};
const server = http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log("Servidor escuchando el puerto 3000".red)});
*/

const express = require('express');
const server = express();

server.use(express.json());

server.get('/', function(req,res){
    res.json({
        nombre:"Freddy",
        apellido:"Catucuamba",
        edad:38
    });   
})
server.post('/', function(req,res){
    res.send("<h1> POST a la raiz </h1>")    
})
server.put('/', function(req,res){
    res.send("<h1> PUT a la raiz </h1>")    
})
server.delete('/', function(req,res){
    res.send("<h1> DELETE ala raiz </h1>")    
})

server.post('/ingresarUsuario', function(req,res){
    console.log(req.body);
    res.send("<h1> POST ingresar Usuario  </h1>");    
})

server.put('/actualizarUsuario', function(req,res){
    res.send("<h1> PUT actualizar Usuario  </h1>")    
})

server.delete('/eliminarUsuario', function(req,res){
    res.send("<h1> DELETE eliminar usuario  </h1>")    
})

server.listen(3000, function(){
    console.log("Servidor en el puerto 300");
})


//----------------------
/*
const express = require('express');
const server = express();
//server.use(express.json());
server.get('/', function(req, res){
    res.send('<h1>Hola mundo con express y node </h1>');
});
server.post('/', function(req, res){
    console.log(req.body);
    res.send('<h1>Post </h1>');
});


server.listen(3000, function(){
    console.log("Servidor en el puerto 3000");
});
*/
//------
