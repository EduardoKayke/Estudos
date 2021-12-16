/** Conhecendo o Webpack Server
 * 
 * Comandos no terminal.
 * yarn add webpack webpack-cli -D (Dois módulos)
 * Precisamos fazer uma configuração pro Webpack.
*/

// Criar um arquivo webpack.config.js e Colocar dentro

// module.exports = {
//     entry: './main.js',
//     output: {
//         path: __dirname,
//         filename: './bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                 }
//             }
//         ],
//     }
// };

// Feito isso a antiga execusão do arquivo package.json muda.
// Era assim.
// "scripts": {
//     "dev": "babel ./main.js -o ./bundle.js -w"
// }

// Fica assim.
// "scripts": {
//     "dev": "webpack --mode=development -w"
// }

// Para executar no modo de desenvolvimento.

// Feito isso rode yarn dev no terminal.


// Podemos exportar coisas pro nosso arquivo main.
// crie outro arquivo js chamado helper.js

// Coloque dentro

// export function soma(num1, num2){
//     return num1 + num2;
// }


// Agora no nosso main importe.
// import { soma } from './helper';
// console.log(soma(40, 2));