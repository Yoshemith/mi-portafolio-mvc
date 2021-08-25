//Requerir path
const path = require('path');

const controlador = {
    home: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'));
    },
    about: (req, res) => {
        res.sendFile(path.resolve('./views/about.html'));
    }
};

module.exports = controlador;