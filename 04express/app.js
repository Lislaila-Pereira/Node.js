// Importar o Express
var express = require('express');

// Criar uma variável 'app' para ter acesso às funcionalidades do Express
var app = express();

// Rota - Caminho para realizar uma ação
// Esta rota lida com a raiz (localhost:8080)
app.get('/', function(req, res){
    // Manipula a solicitação (request) e envia uma resposta (response)

    // Configura a resposta enviada de volta ao cliente
    res.write('Fome fome fome'); // Escreve um texto na resposta
    res.end(); // Encerra a resposta
}) 

// Servidor - Configura o servidor para escutar na porta 8080
app.listen(8080);
