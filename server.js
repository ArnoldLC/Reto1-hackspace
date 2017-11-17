"use strict"

var titulo = "Arnold y sus amigos";

var persona = {
    nombres: "Arnold Steven",
    apellidos: "López Carranza",
    edad: "21",
};

var amigos = [
    {
        nombres: "Rolando Junior",
        apellidos: "Avalos Roque",
        edad: "30",
    },
    {
        nombres: "Carlos Abel",
        apellidos: "Córdova Sáenz",
        edad: "18",
    },
    {
        nombres: "Joseph Alberto Morthimer",
        apellidos: "León Lau",
        edad: "25",
    },
    {
        nombres: "Manuel Francisco",
        apellidos: "Haro Arroyo",
        edad: "40",
    }
];

var express = require("express");
var swig = require("swig");

var server = express();

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache:false});

server.get('/', function(req, res) {
    res.render('template.html', {
        titulo:titulo,
        persona:persona,
        amigos:amigos
    });
})


server.listen(8000, function() {
    console.log("Servidor corriendo en el puerto " + 8000);
})