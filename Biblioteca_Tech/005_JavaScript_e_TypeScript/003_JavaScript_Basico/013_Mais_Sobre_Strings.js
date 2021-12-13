// A melhor forma de escrever textos no console é com o template. `exemplo ${exemplo}.`

let exemplo1 = `Um "Texto".`;
console.log(exemplo1);

let exemplo2 = `Um "Texto".`;
console.log(exemplo2[4]); // Mostra o índice 4, começando do zero. Resposta = T.

let exemplo3 = `Um "Texto".`;
console.log(exemplo3.charAt(6)); // Mostra o índice 6, começando do zero. Resposta = X.

let exemplo4 = `Esse é o melhor.`;
console.log(`Sem dúvidas. ${exemplo4}`);

let exemplo5 = `Um "Texto".`;
console.log(exemplo5.indexOf(`Texto`)); // Mostra o índice da palavra começando do zero. Resposta = 4.

let exemplo6 = `Um "Texto".`;
console.log(exemplo6.lastIndexOf(`U`, 5)); // Mostra o índice 5, começando do zero. Resposta = 0.

let exemplo7 = `Um "Texto".`;
console.log(exemplo7.match(/[a-z]/g)); // Expressão regular. Retorna todas as letras minúsculas. [ 'm', 'e', 'x', 't', 'o' ]

let exemplo8 = `Um "Texto".`;
console.log(exemplo8.match(/[a-z]/)); // Expressão regular. Se retirarmos o g, retorna. [ 'm', index: 1, input: 'Um "Texto".', groups: undefined ]

let exemplo9 = `Um "Texto".`;
console.log(exemplo9.search(/[a-z]/)); // Retorna o índice. Mas aceita expressões regulares.

let exemplo10 = `Um "Texto".`;
console.log(exemplo10.replace(`Um`,`Outro`)); // Troca. Resposta = Outro "Texto". Também funciona expressões regulares.

let exemplo11 = `Orato roeu a roupa do rei de roma.`;
console.log(exemplo11.replace(/r/, `#`));// troca um pois não tem o /g

let exemplo12 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo12.replace(/r/g, `#`));// troca todos os r.

let exemplo13 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo13.length); // Mostra a quantidade de caracteres. Não inicia do zero, mas do 1.

let exemplo14 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo14.slice(2, 6)); // Ele mostra dentro dos caracteres. O índice escolhido de 2 a 6. Resposta = rato

let exemplo15 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo15.split(` `)); // Dividir em arrays. No caso eu escolhi o espaço ` `.

let exemplo16 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo16.split(` `, 2)); // Dividir em arrays. No caso eu escolhi o espaço ` `. O 2 é a quantidade, o resultado. Dividiu apenas `O`,`rato`.

let exemplo17 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo17.toUpperCase()); // Deixar em letra maiúscula.

let exemplo18 = `O rato roeu a roupa do rei de roma.`;
console.log(exemplo18.toLocaleLowerCase()); // Deixar em letra minúscula.