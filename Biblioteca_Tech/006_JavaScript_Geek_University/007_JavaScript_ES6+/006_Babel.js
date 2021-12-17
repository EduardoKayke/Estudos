/**Babel
 * É uma biblioteca.
 * O yarn é um gerenciador de pacotes pra JavaScript e Node.
 * 
 * Babel = Reescreve o seu código para que qualquer avegador
 * entenda.
 * 
 * Comandos no terminal.
 * 
 * yarn init (Iniciar o yarn)
 * 
 * yarn add @babel/cli -D (Trazer a biblioteca do babel)
 * 
 * yarn add @babel/preset-env -D (Pega o código javascript e 
 * prepara o código idependende do local onde está sendo  
 * desenvolvido)
 * 
 * yarn add @babel/core -D
 * yarn add babel-loader -D 
*/

// Para usar o babel, criar um arquivo (.babelrc)  
// Escrever dentro.

// {
//     "presets": ["@babel/preset-env"]
// }


// Script de execução. Terminal: comando - (yarn dev)
// Esse código é um comando do cli, é como pedir pra
// transpilar o arquivo. 
// Dessa forma ele será reescrito.
// Escrever abaixo dos pacotes no arquivo package.json
// O primeiro é ./NOME DO ARQUIVO segue exemplo abaixo.

// "scripts":{
//     "dev": "babel ./main.js -o ./bundle.js -w"
// }

// LEMBRETE para executar é yarn mais o nome do script dado
// Aqui no caso é dev. (yarn dev) Só abre se estiver na pasta.
// Consegui rodar com main.js
// Se colocar -w ele entra automaticamente todas as 
// alterações do nosso arquivo main.js.

// Depois podemos usar o bundle.js no nosso HTML.
// dessa forma o babel cuida de todos os arquivos js
// configurados.