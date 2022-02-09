const http = require('http')
const colors = require('colors')
const morgan = require('morgan')
/*
// Create a local server to receive data from
const funcionServidor = function(req, res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('<h1> Hello world </h1>');
        res.end()
    };

const server = http.createServer(funcionServidor);

server.listen(3000, ()=>{console.log("Servidor escuchando en el puerto 3000".green)});
*/
const express = require('express')
const app = express();


server.use(express.json())
server.get('/',function(req, res){
   
    res.json({
        nombre: "Jv",
        apellido: "Yn"
    })
})

server.post('/ingresarUsuario', function(req, res){
    res.send("<h1> Post ingresar usuario </h1>")
    console.log(req.body)
})
server.put('/actualizarrUsuario', function(req, res){
    res.send("<h1> Actualizar Usuario </h1>")
})
server.delete('/eliminarUsuario', function(req, res){
    res.send('<h1> Eliminar Usuario </h1>')
})

server.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})


function logger(req, res, next){
    console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

/*
app.use(express.json())
app.use(logger)
app.use(morgan('tiny'))


app.get('/conParametro/:id', (req, res)=>{
    console.log(req.params)
    res.send("<h1> Con parametros funcionando </h1>")
})
*/



app.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})