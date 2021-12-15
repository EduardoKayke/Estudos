/**Object Short Sintax
*/

const nome = 'Programação em JavaScript';
const preco = 'R$: 27,99';
const horas = 25;

const curso = {
    nome: nome,
    preco: preco,
    instrutor: 'Geek University',
    carga_Horaria: horas
};

console.log(curso);

// Essa atualização deixa que remova nomes iguais.
// Encurtando a sintaxe.

// const curso = {
//     nome, <--
//     preco, <--
//     instrutor: 'Geek University',
//     carga_Horaria: horas
// };