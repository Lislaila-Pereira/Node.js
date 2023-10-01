// Importar o Express
var express = require('express');

// Criar uma variável 'app' para ter acesso às funcionalidades do Express
var app = express();

//especificar local do css e da imagem
app.use(express.static(__dirname + '/arquivos'));


// Definir uma Rota para a Raiz ('/')
app.get('/', function(req, res){
    // Manipula a solicitação (request) e envia uma resposta (response)

    // Enviar o arquivo 'pagina.html' como resposta
    res.sendFile(__dirname + '/pagina.html');
});

// Configurar o Servidor Express para Escutar na Porta 8080
app.listen(8080);


/*
Enviar o Arquivo 'pagina.html' como Resposta:

Dentro da função de callback da rota, você configura a resposta usando o objeto res. No seu caso, você está usando o método .sendFile() para enviar o arquivo pagina.html como resposta.
__dirname é uma variável global que representa o diretório do arquivo atual. Portanto, __dirname + '/pagina.html' cria o caminho completo para o arquivo HTML que será enviado como resposta.
Configurar o Servidor para Escutar na Porta 8080:

Você chama o método .listen() do objeto app para configurar o servidor Express para escutar na porta 8080. Isso significa que o servidor estará disponível em http://localhost:8080/.
 */

/*
não é necessário usar o método createServer do Node.js diretamente porque estou utilizando o Express.js. O Express é uma camada acima do Node.js que abstrai muitos detalhes de baixo nível, incluindo a criação do servidor HTTP. */