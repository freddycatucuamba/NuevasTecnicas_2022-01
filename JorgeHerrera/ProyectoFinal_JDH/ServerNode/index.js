
//const math = require('./math');
//console.log(math);

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
//midelware
server.use(express.json());
server.get('/', function(req,res){
    //res.send("<h1> Get con Express </h1>")   
    res.json({        
        cliente:"Jorge Herrera",
        num_habitacion:120,
        tipo_habitacion:"Individual",
        fecha_ingreso: "2022-02-17",
        fecha_salida:"2022-02-20",
        total_noches:3,
        cant_habitaciones:1,
        subtotal:60,
        iva:7.20,
        total:89.6,	
        pago:"Efectivo"    
    });   
})
server.post('/', function(req,res){
    res.send("<h1> POST a / </h1>")   
})
server.put('/', function(req,res){
    res.send("<h1> PUT a la / </h1>")   
})
server.delete('/', function(req,res){
    res.send("<h1> DELETE a / </h1>")   
})
server.get('/reserva', function(req,res){
    res.send("<h1> Pantalla de Reservas Hotel </h1>")
})
//METODO DE EXPRESS SEND
server.post('/ingresarReserva', function(req,res){
    //traer datos a nuestra app
    console.log(req.body);
    res.send("<h1> POST - Pantalla de Ingreso de Reservas Hotel </h1>")
})
server.put('/actualizarReserva', function(req,res){
    res.send("<h1> PUT - Pantalla de Actualizar Reservas Hotel </h1>")
})
server.delete('/eliminarReserva', function(req,res){
    res.send("<h1> ELIMINAR - Pantalla de Reservas Hotel </h1>")
})

server.listen(3000, function(){
    console.log("Servidor en el puerto 300");
})


/////////////////////////////////////////////////
/*
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