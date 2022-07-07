// Nesse exemplo vamos baixar o módulo lodash
// comando (npm i lodash) na pasta do node

// Lodash é uma biblioteca Javascript que fornece um 
//conjunto de funções para que a pessoa programadora 
//possa trabalhar com mais facilidade em tarefas que 
//envolvam a manipulação de matrizes, strings, 
//objetos, números e etc...

const _ = require('lodash')

setInterval(() => console.log(_.random(1, 10)), 2000)

// usamos o comando (sudo npm i -g nodemon), instalou direto na raíz do disco. Instalamos de forma global (-g) 

// o nodemon ele inicia e atualiza sozinho a cada modificação do nosso arquivo.

// Para iniciar digite no terminal.

// (nodemon + nome do arquivo) - Ctrl + c para sair