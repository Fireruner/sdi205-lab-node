// Módulos
var express = require('express');
var app = express();

var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Variables
app.set('port', 8081);

app.use(express.static('public'));

//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig); // (app, param1, param2, etc.)


// lanzar el servidor
app.listen(app.get('port'), function()
{
    console.log("Servidor activo");
});

/*
mongodb://admin:sdi@tiendamusica-shard-00-00-paphl.mongodb.net:27017,tiendamusica-shard-00-01-paphl.mongodb.net:27017,tiendamusica-shard-00-02-paphl.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true
 */