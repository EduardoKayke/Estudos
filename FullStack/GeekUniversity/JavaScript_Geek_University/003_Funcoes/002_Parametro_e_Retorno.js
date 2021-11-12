/**
 * Funções com Parâmetro e Retorno 
 */

function calcularIdade1(anoNascimento){
    const data = new Date(); // Gera a data atual.

    const idade = data.getFullYear() - anoNascimento;

    return idade;
}

function calcularIdade2(anoNascimento){
    const data = new Date();

    const idade = data.getFullYear() - anoNascimento;

    console.log(idade);
}

// Com essa podemos usar a variável e fazer algo. Exemplo abaixo...
let calculoIdade1 = calcularIdade1(1994);
console.log(calculoIdade1); // 27
console.log(calculoIdade1 + 5); // 32 (Exemplo)

// Com essa apenas apresentamos o dado imposto.
calcularIdade2(1973); // 48

// Mais sobre o new Data();

const data = new Date();
// Data completa Fri Nov 12 2021 12:43:06 GMT-0300 (Horário Padrão de Brasília)  
console.log(`Data completa: ${data}`);
// Ano: 2021
console.log(`Ano: ${data.getFullYear()}`);
// Mês: 10 - Estamos no 11, no JS os meses começam: Janeiro = 0, Dez = 11
console.log(`Mês: ${data.getMonth()}`);

// FIQUE ESPERTO!!!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6)); // 10
console.log(somar(4)); // NaN
console.log(somar(4, 6, 8)); // 10
console.log(somar(4, 6, 8, 3, 2, 1, 19)); // 10