var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res) {
    res.send('<h1>Página de inico</h1>');
}
function c_clientes(req,res) {
    res.send('<h1>Clientes</h1><br><h4>Fernando Jose Sanchez Berru</h4><br><h4>Saida Lizeth Castellanos Rios</h4><br><h4>Andrea Juana Armendares Rios</h4>');
}

function c_productos(req,res) {
    res.send('<h1>Productos</h1><br><h4>Teclado</h4><br><h4>Laptop</h4><br><h4>Mouse</h4>');
}

function c_server() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ':' + port);
}

var server = app.listen(5000,c_server);
