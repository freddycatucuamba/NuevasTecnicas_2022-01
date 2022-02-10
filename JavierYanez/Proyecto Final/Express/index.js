var path = require('path');
const morgan = require('morgan')
const express = require('express')
const app = express();
app.use(express.json())
app.use(logger)
app.use(morgan('tiny'))

app.set('view engine', 'pug');

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

app.post('/ingresarHabit', function(req, res,next){
    //res.send("<h1> Post ingresar habitacion </h1>")
    console.log(req.body)
    var habi = new Habitacion(req.body.id, req.body.tipo, req.body.numero, req.body.piso);
    console.log(habi)
    Habitacion.add(habi);
    console.log(Habitacion.allHabit)    
    next()   
}, function(req, res, next){
    res.render('index', {habitaciones: Habitacion.allHabit})
})

Habitacion.eliminarId = function(aHabidId){
    for(var i=0; i<Habitacion.allHabit.length; i++){
        if(Habitacion.allHabit[i].id == aHabidId){
            Habitacion.allHabit.splice(i, 1);
            break;
        }
    }
}

app.delete('/eliminarHabitacion', function(req, res){
    res.send('<h1> Eliminar Habitacion </h1>')
    console.log(req.body.id)    
    Habitacion.eliminarId(req.body.id)
    console.log(" -- Eliminar --> ID: "+ req.body.id)
    console.log(Habitacion.allHabit)
   
})

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



app.get('/',function(req, res){   
    res.render('index', {habitaciones: Habitacion.allHabit})
})

app.listen(3000, function(){
    console.log("Servidor en el puerto 3000") 
})