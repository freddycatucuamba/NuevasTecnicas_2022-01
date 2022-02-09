const http = require('http')
const morgan = require('morgan')

// Create a local server to receive data from
/*
const funcionServidor = function(req, res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('<h1>Hello world</h1>');
        res.end()
    };

const server = http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log("Servidor escuchando en el puerto 3000")});
*/
const express = require('express');
const { appendFile } = require('fs');
const server = express();

function logger(req, res, next){
    console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

app.use(express.json())
app.use(logger)
app.use(morgan('tiny'))


app.get('/conParametro/:id', (req, res)=>{
    console.log(req.params)
    res.send("<h1> Con parametros funcionando </h1>")
})


server.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})
  