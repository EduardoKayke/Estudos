const fabricantes = ['Mercedes', 'Audi', 'BMW']

// Essa assinatura é uma função que pode ser passada pra uma função forEach. 
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
// 1. Mercedes
// 2. Audi
// 3. BMW

//Poderiamos fazer assim: (param pode ser qualquer nome.)
fabricantes.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`);
});
// 1. Mercedes
// 2. Audi
// 3. BMW

// Ideia do callback, passar uma função, pra outra função.
// forEach é uma função pra array.
// Ou seja, dentro do array tem a função forEach.