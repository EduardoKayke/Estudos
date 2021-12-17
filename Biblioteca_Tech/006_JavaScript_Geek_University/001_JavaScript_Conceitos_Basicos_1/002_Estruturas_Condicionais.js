var idade = 14;

if (idade >= 18) {
    console.log(`Maior de idade`);
}

else {
    console.log(`Menor de idade`);
}

if (idade <= 14) {
    console.log(`Criança`);
}

// E ou AND = &&
else if (idade > 14 && idade < 18) {
    console.log(`Adolecente`);
}

else {
    console.log(`Adulto`);
}

/** Dica Geek
 * == verifica valor.
 * === verifica valor e tipo de dado. 
 */

if(1 == `1`){
    console.log(`Sim, 1 == "1"`);    
}

else {
    console.log(`Não`);
}

if(1 === `1`){
    console.log(`Sim, 1 == "1"`);    
}

else {
    console.log(`Não`);
}

// Estrutura de dados switch. Substitui os ifs, else ifs e elses etc...
var sexo = `f`;

// case = caso e default = desconhecido
switch(sexo) {
    case `m`:
        console.log(`Masculino`)
        break;
    case `f`:
        console.log(`Feminino`);
        break;
    default:
        console.log(`Desconhecido`)
        break;
}

// Outra dica.

var s = `m`;
var masculino;

if(s === `m`) {
    masculino = true;
}

else {
    masculino = false;
}

console.log(masculino)

// Simplificando
var masc = (s === `m`);
console.log(masc);