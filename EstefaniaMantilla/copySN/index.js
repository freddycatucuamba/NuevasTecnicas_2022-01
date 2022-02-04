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