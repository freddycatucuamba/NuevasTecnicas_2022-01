const http = require('http')
const colors = require('colors')
const morgan = require('morgan')
var path = require('path');
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

app.use(express.json())
app.use(logger)
app.use(morgan('tiny'))


//engine
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(express.json())
/*
app.get('/',function(req, res){
   
    res.json({
        nombre: "Jv",
        apellido: "Yn"
    })
})
*/
app.get('/a',function(req, res){
    res.json(express.json())
})
app.get('/asd',function(req, res){
   
    res.json({
        nombre: "Jv",
        apellido: "Yn"
    })
})

app.post('/ingresarUsuario', function(req, res){
    res.send("<h1> Post ingresar usuario </h1>")
    console.log(req.body)
})
app.put('/actualizarrUsuario', function(req, res){
    res.send("<h1> Actualizar Usuario </h1>")
})
app.delete('/eliminarUsuario', function(req, res){
    res.send('<h1> Eliminar Usuario </h1>')
})
/*
app.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})
*/

function logger(req, res, next){
    console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}




app.get('/conParametro/:id', (req, res)=>{
    console.log(req.params)
    res.send("<h1> Con parametros funcionando </h1>")
})



var Habitacion = function (id,tipo, numero, piso){
    this.id =id;
    this.tipo = tipo;
    this.numero = numero;
    this.piso = piso;
}

Habitacion.allHabit =[];
Habitacion.add = function(aHabit){
    Habitacion.allHabit.push(aHabit)
}

var a = new Habitacion(1,'normal',45,4);
var b = new Habitacion(2,'suite',71,7);
Habitacion.add(a);
Habitacion.add(b);

app.post('/ingresarHabit', function(req, res){
    res.send("<h1> Post ingresar habitacion </h1>")
    console.log(req.body)
    var habi = new Habitacion(req.body.id, req.body.tipo, req.body.numero, req.body.piso);
    console.log(habi)
    Habitacion.add(habi);
    console.log(Habitacion.allHabit)
})

Habitacion.eliminarId = function(aHabidId){
    for(var i=0; i<Habitacion.allHabit.length; i++){
        if(Habitacion.allHabit[i].id == aHabidId){
            Habitacion.allHabit.splice(i, 1);
            break;
        }
    }
}

app.delete('/eliminarHabitacion/', function(req, res){
    res.send('<h1> Eliminar Habitacion </h1>')
    console.log(req.body.id)    
    Habitacion.eliminarId(req.body.id)
    console.log(" -- Eliminar --> ID: "+ req.body.id)
    console.log(Habitacion.allHabit)
})


//console.log("Eliminar 2")
//Habitacion.eliminarId(2);
//console.log(Habitacion.allHabit)
var tipoa = "Luxury";

Habitacion.actualizarId = function(aHabidId, tipoa){
    for(var i=0; i<Habitacion.allHabit.length; i++){
        if(Habitacion.allHabit[i].id == aHabidId){
            Habitacion.allHabit[i].tipo = tipoa;            
        }
    }
}

app.put('/actualizarHabitacion', function(req, res){
    res.send("<h1> Actualizar Habitacion </h1>")
    console.log(req.body.id, req.body.tipo)
    var tipoU = req.body.tipo
    var habiId = req.body.id
    Habitacion.actualizarId(habiId,tipoU)
    console.log(" -- Actualizar --> ID: "+req.body.id+" TIPO: "+req.body.tipo)
    console.log(Habitacion.allHabit)
})

/*
console.log("Actualizar 1")
Habitacion.actualizarId(1, tipoa);
console.log(Habitacion.allHabit)
*/

app.get('/',function(req, res){    
    //res.send(Habitacion.allHabit)    
    res.render('index', {habitaciones: Habitacion.allHabit})
})

app.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})