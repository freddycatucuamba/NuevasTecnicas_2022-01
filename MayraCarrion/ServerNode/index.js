/*
const math = require('./math.js')
console.log(math);
*/

//se uso node
/*
const http=require('http');
const colors=require('colors');
const funcionServidor = function(req, res){
        res.writeHead(404, {'Content-type':'text/html'});
        res.write('<h1> Hello World </h1>');
        res.end();
};

const server= http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log('Server on port 3000'.red)});
*/

// se usa express
const express = require('express');
const server = express();
//este es un middle world
server.use(express.json());

server.get('/', function(req, res){
        //res.send('<h1>GET con express (GET)</h1>');
        res.json({
                nombre: "Mayra",
                apellido: "Carrion",
                edad: "25"
        });
})
server.post('/ingresarUsuario', function(req, res){
       console.log(req.body);
        res.send('<h1>Ingresar Usuario (POST)</h1>');
})
server.put('/actualizarUsuario', function(req, res){
        res.send('<h1>Actualizar Usuario (PUT)</h1>')
})
server.delete('/eliminarUsuario', function(req, res){
        res.send('<h1>Eliminar Usuario (DELETE)</h1>')
})
server.listen(3000, function(){
        console.log('El servidor esta en el puerto 3000');
})
