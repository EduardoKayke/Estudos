/**Currying é o processo de transformar uma função que espera
 * vários argumentos em uma função que espera um único 
 * argumento e retorna outra função curried. ... Aplicação 
 * parcial de uma função corresponde a chamar a função 
 * passando menos argumentos do que a função recebe. 
*/

function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 4));


function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(5)(4));

// Outra forma de usar

const somarMais10 = somar2(10);
console.log(somarMais10(5)); // 15
console.log(somarMais10(15)); // 25