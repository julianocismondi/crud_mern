const express = require ('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require ('./database');
//setings
app.set('port', process.env.PORT || 3000);



//Middlewares
app.use(morgan('dev'));
app.use(express.json());



//routes

app.use('/api/clients',require('./routes/clients.routes'));

//static files

app.use(express.static(path.join(__dirname, 'public')));



//global variables



//starting server
app.listen(app.get('port'), () => {
    console.log(`Server on PORT ${app.get('port')}`); 
})