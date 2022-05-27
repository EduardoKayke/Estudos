// Função que executa outra função.

function executar(param) {
    if(typeof param === "function"){
        console.log(param()); // PARTE CENTRAL DA AULA.
    }
}

function bomDia() {
    return `Bom dia`;
}

// Para executar a função devemos tirar os parênteses.
executar(bomDia); // PARTE CENTRAL DA AULA.

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);

// Passamos uma função como parâmetro para outra função.