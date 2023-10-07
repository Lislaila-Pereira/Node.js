//express e body-parser
var express = require('express');
var bodyParser = require('body-parser');

//obj express
var app = express();

//usando body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rotas
//rota padrao
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res) {
    res.write(req.body.nome);
    res.end();
})

//servidor
app.listen(8080);

/*
Quando uma solicitação POST é enviada para a rota /receber, o servidor responde escrevendo o valor do campo nome do corpo da solicitação no corpo da resposta usando res.write(req.body.nome). Em seguida, a resposta é encerrada com res.end().
*/