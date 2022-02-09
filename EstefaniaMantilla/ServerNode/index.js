/*const express = require ('express');
const http = require ('http');
const colors = require ('colors');
const functionServer = (
    function (req, res){
        res.writeHead (200, {'Content-type':'text/html'});
        res.write("El servidor esta levantado");
        res.end("termina");
    }


)

const server = http.createServer(functionServer);
server.listen(3000, ()=>{console.log ('Server on port 3000'.green)})

const server = express();

server.use(express.json());

server.get('/', function(req,res) {
  //res.send("<h1>Get con express</h1>")
  res.json({

    nombre: "Estefania",
    apellido: "Mantilla"
  
  });

})



server.get('/', function(req,res) {
    res.send("<h1>Pantalla login</h1>")
  })

  server.post('/ingresarUsuario', function(req,res) {
    console.log(req.body);
    res.send("<h1>Post a la raiz </h1>")
  })

  server.put('/', function(req,res) {
    res.send("<h1>Put a la raiz </h1>")
  })

  server.delete('/', function(req,res) {
    res.send("<h1>Delete a la raiz </h1>")
  })

  server.get('/', function(req,res) {
    res.send("<h1>Pantalla login</h1>")
  })
  server.post('/ingresarUsuario', function(req,res) {
    console.log(req.body);
    res.send("<h1>Post a la raiz </h1>")
  })

  server.put('/', function(req,res) {
    res.send("<h1>Put a la raiz </h1>")
  })

  server.delete('/', function(req,res) {
    res.send("<h1>Delete a la raiz </h1>")
  }) 

  
server.listen(3000, function(){

    console.log("Servidor en el puerto 3000");
});

*/
/*
const express = require('express');
const app = express();
const morgan = require ('morgan');
function logger(req, res, next){
  console.log("Ingresa al sistema")
  console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next();
}

app.use(express.json());
app.use(logger);
app.use(morgan('tiny'));

app.set('port', 5000);

app.get('/conParametro/:id', (req,res)=> {
  console.log (req.params);
  res.send("<h1>Parametros funcionando</h1>")
})

app.listen(app.get('port'), (req, res)=>{
  console.log("El servidor esta en el puerto", app.get('port'))
});
*/
const express = require('express')
const authRoutes = require('./routes/auth.js')
const userRoutes = require('./routes/user.js')
const hotelRoutes = require('./routes/hotel.js')
require('dotenv').config()

const app = express()

app.use(authRoutes)
app.use(userRoutes)
app.use(hotelRoutes)

app.get('/', (req, res) => {
    res.json({ mensaje: 'My Auth Api Rest' })
})

//Rutas
app.use('/', require('./routes/user'))
//app.use('/hotel', require('./routes/hotel'))


const PORT = process.env.PORT || 8002
app.listen(PORT, () => {
    console.log(`Tu servidor está corriendo en el puerto: ${PORT}`)
})

const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.tstnx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log('Database error', e)
  })

  app.use(express.json());
app.use(express.urlencoded({ extended: false }));