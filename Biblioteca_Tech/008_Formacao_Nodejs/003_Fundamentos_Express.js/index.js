//SIGA A ORDEM
//--------------------PARTE 1 ---------------------------
const express = require("express"); // Importando o Express
const app = express(); // Função que carrega todo o framework



//--------------------PARTE 3 ---------------------------
// Vamos criar a rota para o erro Cannot GET /
// existe outras formas, get, post, delete, option, patch...

//Minha rota inicial. Pode ser outras, Tipo /perfil, /blog...
app.get("/", function(requisition, response){
    response.send("Bem vindo!");
});
// "/" = página inicial do meu app.
//https://www.cineagenda.com.br/

//IMPORTANTE - em toda rota que criar, devolver resposta.
// Você só pode enviar resposta uma única vez. Se não dá erro.
// Após enviar uma vez a conexão fecha, então não adianta
// enviar duas vezes. (Porém podemos criar outras rotas.)
// Pode ser uma página HTML, arquivo, download, json, xml e etc...

app.get("/blog", function(requisition, response){
    response.send("<h1>Bem vindo ao meu blog!</h1>")
});

app.get("/canal/youtube", function(requisition, response){
    response.send("Bem vindo ao meu canal!")
});


//--------------------PARTE 2 ---------------------------
// Essa função é chamada sempre que o servidor é iniciado.
// Parâmetro erro, se acontecer algum erro recebemos o parâmetro.
// Porta 4000 (Pode ser qualquer uma)
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
});

// Isso é o suficiente para abrir um servidor Express.
// Mensagem vista no browser (localhost:4000)
// Cannot GET /

// Está funcionando!!!!!

// Esse erro Cannot GET / é por causa das rotas. Não há rotas.


//--------------------PARTE 4 ---------------------------
// Vamos fazer com que o node faça um carregamento automático
// Nodemon = módulo responsável por reiniciar o servidor após
// modificação.
// Para instalar usamos o terminal.
// npm install nodemon -g

// Para rodar com o módulo use no terminal na pasta que tiver o arquivo
// nodemon index.js 

// Quando fui executar o projeto pelo comando "nodemon index.
// js", recebi um erro dizendo que o arquivo não podia ser 
// carregado porque a execução de scripts foi desabilitada neste sistema.

// Pra resolver, abra seu PowerShell como administrador 
// digite sem aspas "Get-ExecutionPolicy", provavelmente o 
// seu vai dar como "Restricted"
// Então, digite sem aspas "Set-ExecutionPolicy Unrestricted"
// vai aparecer uma mensagem de confirmação 
// digite sem aspas "S" e aperte enter. 
// Resolvido :D
