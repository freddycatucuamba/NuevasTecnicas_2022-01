/*
const http= require('http');
const colors =require('colors');
const funcionServidor=function (req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write('<h1> Hello worl </h1>');
	res.end();
};
	const server = http.createServer(funcionServidor);
    server.listen(3000,() => {console.log("servidore escuchando el puerto 3000".red)})

	*/
/*
	const express = require ('express');
	const server = express();
	server.listen(3000,function(){
		console.log("servidor en el puerto 3000");
	})*/

	// se usa express
const express = require('express');
const morgan=require('morgan');
//const server = express();
const app = express();
//este es un middle world
//server.use(express.json());

/*server.get('/', function(req, res){
        //res.send('<h1>GET con express (GET)</h1>');
        res.json({
                nombre: "Jorge",
                apellido: "Herrera",
                edad: "22"
        });
})*/
//midelware
function logger(req,res,next){
        console.log('ingresar al sistema');
        next();
}
app.use(express.json());
app.use(logger);
app.use(morgan('tiny'));
app.set('port',5000);

app.get('/conParametro/:id',(req, res) =>{
        console.log(req.params);
        res.send("<h1> con parametros </h1>")
})     
//app.listen(3000, function(){
        app.listen(app.get('port'), (req, res) =>{
        console.log('El servidor esta en el puerto 3000');
})

/*
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
*/
