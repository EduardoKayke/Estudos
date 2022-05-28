// Vamos instalar o TypeScript usando o NPM

// Comando para instalar no windows - (npm i -g typescript)
// comando para ver a versão do TypeScript - (tsc -v)


// RODAR COM TERMINAL
// Uma forma de executar o TypeScript é pelo plugin Code Runner
// Vamos instalar de forma global com o cmd usando o comando (npm i -g ts-node)
// Pronto, já podemos usar o terminal do VS-Code para ver o código direto do arquivo TypeScript.


// RODAR COM NAVEGADOR
// Agora vamos escolher a pasta que será a dos arquivos TypeScript.
// A pasta escolhida foi 004_Typescript
// Comando - (tsc --init), esse comando cria o arquivo tsconfig.json onde vamos configurar o compilador.
// Para rodar o arquivo TypeScript e compilar, devemos entrar na pasta do arquivo e usar o comando
// (tsc nomedoarquivo.ts) no terminal. Assim conseguimos criar o arquivo js que será usado no HTML.
// O browser não entende .ts só .js
// Para isso vamos 
// Usando o comando (npm init -y) na pasta raiz 004_TypeScript, assim será criado um arquivo package.json
// dentro do arquivo package.json podemos apagar de scripts a seguinte linha
// ("test": "echo \"Error: no test specified\" && exit 1")
// Agora usamos o comando (npm i -s live-server), podemos usar outros. Isso é um servidor para 
// compilação de forma automática. Ele aparecerá em dependencies dentro de package.json e também a pasta do node_modules será instalada
// Feito isso chame o ("start": "live-server") dentro de scripts em package.json
// assim podemos usar o comando (npm start) para rodar a aplicação.
// Agora vamos deixar a compilação automática.
// Na pasta raiz 004_TypeScript use o comando (tsc -w) em outra aba do terminal, pois tem que estar rodando o comando (npm start) junto.
// Pronto.