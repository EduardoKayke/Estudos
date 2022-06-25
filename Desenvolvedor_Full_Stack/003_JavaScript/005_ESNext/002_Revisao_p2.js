// Arrow Function 
const soma = (a, b) => a + b
console.log(soma(2, 3)); // 5

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({}) // não muda.
lexico1() // true export
lexico2() // true, ambos apontam para export

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto);
}
log() // Node

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)); // 14