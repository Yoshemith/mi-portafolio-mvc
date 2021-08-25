const express = require('express');
const app = express();
//Usando recursos estaticos
app.use(express.static('public'));
const rutas = require('./routers/main');

app.use('/', rutas);

let port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Server running');
});