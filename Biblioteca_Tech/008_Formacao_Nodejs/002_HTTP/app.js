//Carregando o module http do node na variável.
var http = require("http");

//A porta onde meu servidor vai rodar. Pode coloca qualquer número.
http.createServer(function(requisition, response){
    response.end("<h1>Bem vindo ao meu site!</h1>    <h4>cineagenda.com.br</h4>");
}).listen(8181);

// Rodar no terminal (node app.js)
console.log("Meu servidor está rodando");
// Acessar no browser - localhost:8181