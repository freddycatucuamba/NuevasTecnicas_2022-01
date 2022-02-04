/*const MayorMenor = require("./JavaScript/numero_mayor.js");
console.log(MayorMenor.add(2,5))

const os = require('os');
console.log(os.platform());*/

/*const server = http.createServer((req, res) => {
    res.write("El servidor está levantado");
    res.statusCode = 404;
    res.end("Terminado..!!!");
}).listen(3000);*/


/*const http = require('http')
const funcionServidor = function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1>Hello World</h1>')
    res.end()
}


const server = http.createServer(funcionServidor)
server.listen(3000, () => {console.log('Servidor escuchando en el puerto 3000')})*/

const express = require('express')
const morgan = require('morgan')
const server = express();

function logger(req, res, next){
    console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    console.log("Ingresa al sistema")
    next()
}

server.use(express.json())
server.use(logger)
server.use(morgan('tiny'))

server.set('port', 2000)

server.get('/', function(req, res){
    res.json({
        nombre: "Marcos Guzman",
        email:"marcosguzzz@gmail.com",
        edad:"20"
    })
})

server.post('/ingresarUsuario', function(req, res){
    res.send("<h1>Ingresar Usuario</h1>")
    console.log(req.body.nombre)
})

server.put('/actualizarUsuario', function(req, res){
    res.send("<h1>Actualizar Usuario</h1>")
})

server.delete('/eliminarUsuario', function(req, res){
    res.send("<h1>Eliminar Usuario</h1>")
})


server.get('/conParametros/:id', function(req, res){
    res.send("<h1>Con Parametros</h1>")
})

server.listen(server.get('port'), function(){
    console.log("Servidor en el puerto: ", server.get('port'))
})