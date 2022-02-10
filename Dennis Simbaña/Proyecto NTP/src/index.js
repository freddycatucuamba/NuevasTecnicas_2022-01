const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const{} = require('./routes/database');

//setings
app.set('port', process.env.PORT || 3000);



//middlewars
app.use(morgan('dev'));
app.use(express.json());



//routes
app.use('/api/task',require('./routes/task.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//empezando el servidor

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});