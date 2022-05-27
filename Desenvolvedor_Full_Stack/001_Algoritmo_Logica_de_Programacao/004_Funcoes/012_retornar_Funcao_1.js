function retornaUmaFuncao() {

    function bomDia() {
        return `Bom dia`;
    }

    return bomDia();
}

console.log(retornaUmaFuncao); // [Function: retornaUmaFuncao]
console.log(retornaUmaFuncao()); // Bom dia

// Outro exemplo.

function exemplo() {

    return function () {
        return function () {
            return "Boa tarde";
        }
    }
}

console.log(exemplo); // [Function: exemplo]
console.log(exemplo()); // [Function (anonymous)]
console.log(exemplo()()); // [Function (anonymous)]
console.log(exemplo()()()); // Bom tarde