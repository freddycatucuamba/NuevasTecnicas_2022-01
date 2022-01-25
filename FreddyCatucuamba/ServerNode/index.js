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
/*
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
*/

/////////////////////////////////////////////////

const expres = require('express');
const morgan = require('morgan');
const app = expres();

function logger(req, res, next){
    console.log(`Petición recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}
app.use(expres.json());
app.use(logger);
app.use(morgan('tiny'));

app.set('port',4000);

app.get('/conParametro/:id',(req,res)=>{
    console.log(req.params)
    res.send("<h1> Con parámetros funcionando </h1>")
})

app.listen(app.get('port'), (req, res)=>{
    console.log("El servidor está en el puerto", app.get('port'))
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
/*
/////////MIDDLEWARES//////////////////////
const express = require('express');
const { Server } = require('http');
const { hostname } = require('os');
const morgan = require('morgan');
const server = express();

function logger(req, res, next){
    console.log("Petición recibida");
    next();
}
function logger2(req, res, next){
    console.log(`Petición recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
server.use(express.json());
server.use(logger);
server.use(logger2);
server.use(morgan('combined'));



server.get('/', function(req,res){
    res.json({
        nombre:"Freddy",
        apellido:"Catucuamba",
        edad:38
    });   
})

server.listen(3000, function(){
    console.log("Servidor en el puerto 3000");
})


//////////////////////EXPRESS SETTINGS


*/