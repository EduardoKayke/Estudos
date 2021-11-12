/**
 * Arrow Function é a forma simplificada ou reduzida de uma função.
 */

// Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

// Forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(2, 2));

// Forma 3
let somar3 = somar1;

console.log(somar3(4, 6));


// Exmplo de Arrow Function
let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(6, 6));

/**
 * ATENÇÃO!
 * 
 * Caso a sua função tenha apenas 1 parâmetro de entrada e executa apenas
 * uma linha, você pode simplificar usando arrow functions.
 */

let dobrar = valor => valor * 2; // Arrow Function.

console.log(dobrar(3)); 

// Mais um exemplo.

function mensagem() {
    console.log(`Olá`);    
}

mensagem();

// Com arrow function
const mensagem1 = () => console.log(`Oiiiii`);

mensagem1();