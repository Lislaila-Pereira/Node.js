// Importar o módulo http (que já vem com o Node.js)
var http = require('http');

// Criar um servidor HTTP
http.createServer(function(req, res) {
    // req é o objeto de requisição (request) recebido pelo servidor
    // res é o objeto de resposta (response) que você enviará de volta ao cliente

    // Configurar a resposta do servidor
    res.write('Estudando Node.js'); // Escreve um texto na resposta
    res.end(); // Encerra a resposta
}).listen(8080); // O servidor escutará na porta 8080

// Para visualizar isso, basta pesquisar localhost:8080 no navegador


//explicacao
/*
Criar um servidor HTTP: 
Você chama o método http.createServer() para criar um servidor HTTP. Esse método recebe uma função de callback que será executada sempre que uma solicitação HTTP for recebida no servidor.

Função de Callback do Servidor: 
Dentro da função de callback do servidor, você lida com cada solicitação recebida pelo servidor. O servidor passa dois objetos para esta função:
req (requisição): Este objeto contém informações sobre a solicitação feita pelo cliente, como URL, cabeçalhos e outros dados relacionados à solicitação.
res (resposta): Este objeto é usado para enviar uma resposta de volta ao cliente.
Configurar a Resposta: 
Você configura a resposta que será enviada ao cliente usando o objeto res. No código, você chama res.write() para escrever o texto "Estudando Node.js!" na resposta.
 */