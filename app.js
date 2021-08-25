const express = require('express');
const app = express();
//Usando recursos estaticos
app.use(express.static('public'));
const rutas = require('./routers/main');

app.use('/', rutas);

app.listen(3000, ()=> {
    console.log('Server running');
});