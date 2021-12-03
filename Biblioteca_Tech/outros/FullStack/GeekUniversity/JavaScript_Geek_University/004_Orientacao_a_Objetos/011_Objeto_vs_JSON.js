/**
 * JSON - JavaScript Object Notation
 * 
 * O JSON é texto, é um formato de texto.
 * Usado na comunicação entre sistemas.
 * 
 * O formato mais comum da API de enviar dados ou receber dados é JSON.
*/

const curso = {
    nome: `Programação em JavaScript`,
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

console.log(curso); // Objeto JavaScript
// console.log(curso.preco());
// console.log(typeof(curso));

//converter objeto pro formato JSON.
const json = JSON.stringify(curso);
console.log(json); // JSON 
// {"nome":"Programação em JavaScript","horas":27}
console.log(typeof(json)); // string

//converter JSON para objeto JavaScript.
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));


// Ponto importante sobre erros.
// const jsonErrado = "{'nome': 'Programação JavaScript', 'preco': '27.99'}";
const jsonCorrigido = '{"nome": "Programação JavaScript", "preco": "27.99"}';
console.log(jsonCorrigido);
console.log(typeof(jsonCorrigido));

const novoObj = console.log(JSON.parse(jsonCorrigido)); 
console.log(novoObj);
console.log(typeof(novoObj));
// Ele não converteu. Porcausa das aspas. Vamos corrigir e refazer.