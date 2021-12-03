/**
 *  Funções com parâmetros variáveis e valor padrão.
 */

function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }    
    return soma;
}

console.log(somar1()); // 0
console.log(somar1(2)); // 2
console.log(somar1(2, 5)); // 2
console.log(somar1(5, 3, 9)); // 17
console.log(somar1(2, 4, 6, 8, 12)); // 32
console.log(`------------------------------------`);

// arguments - cria um array para os dados e assim conseguimos calcular.

function imprimirValores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }    
}

imprimirValores(); // Não aparece.
imprimirValores(4, 6); // 4, 6
imprimirValores(4, 6, 8); // 4, 6, 8
imprimirValores(3, 6, 8, 12, 44, 56); // 3, 6, 8, 12, 44, 56
console.log(`-----------------------------------`);

// Gambiarras para Valor Padrão.(Utilizado antigamente)
function somar2(num1, num2, num3){
    num1 = num1 || 1; // Gambiarra
    num2 = num2 || 2; // Gambiarra
    num3 = num3 || 3; // Gambiarra

    return num1 + num2 + num3;
}

console.log(somar2(4, 5, 6));// 15
console.log(somar2()); // 6 - (1 + 2 + 3) - Passou o valor padrão.
console.log(somar2(2)); // 7 - (2 + 3) - Passou o valor padrão.
console.log(somar2(0, 0, 0));// BUG, era ZERO deu 6.
// No JavaScript o ZERO é considerado FALSO!
console.log(`---------------------------------`);
// Gambiarra 2 inventada por causa do bug do zero.
function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1 + num2 + num3;
}

console.log(somar3(4, 5, 6));// 15
console.log(somar3()); // 6 - (1 + 2 + 3) - Passou o valor padrão.
console.log(somar3(2)); // 7 - (2 + 3) - Passou o valor padrão.
console.log(somar3(0, 0, 0));// 0
console.log(`------------------------------------`);

// FORMA ATUAL VALOR PADRÃO. RECOMANDADA!!
function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar4(4, 5, 6));// 15
console.log(somar4()); // 6 - (1 + 2 + 3) - Passou o valor padrão.
console.log(somar4(2)); // 7 - (2 + 3) - Passou o valor padrão.
console.log(somar4(0, 0, 0));// 0
console.log(somar4(`a`, `b`, `c`)); // 'abc'
console.log(somar4(true, false, `c`)); // '1c'- 1 True, False 0
console.log(somar4(2, true, false)); // 3 - 1 True, False 0
console.log(`---------------------------------------------------`);

/**
 * Em JavaScript 1 é considerado True e 0 é considerado False.
 */

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return `Não foi possível efetuar a soma.`;
    }
}

console.log(somar5(4, 5, 6));// 15
console.log(somar5()); // 6 - (1 + 2 + 3) - Passou o valor padrão.
console.log(somar5(2)); // 7 - (2 + 3) - Passou o valor padrão.
console.log(somar5(0, 0, 0));// 0
console.log(somar5(`a`, `b`, `c`)); // Não foi possível efetuar a soma.
console.log(somar5(true, false, `c`)); // Não foi possível efetuar a soma.
console.log(somar5(2, true, false)); // Não foi possível efetuar a soma.