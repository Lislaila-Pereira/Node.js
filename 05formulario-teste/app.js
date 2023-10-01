var express = require('express');
var app = express();

//especificar local do css e da imagem
app.use(express.static(__dirname + '/css'));

//rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
});

//conectar ao servidor
app.listen(8080);