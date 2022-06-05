let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implícito
console.log(dobro(Math.PI)); // 6.283185307179586


// Outro exemplo
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Forma padrão
ola = _ => 'Olá' // possui um param
console.log(ola()); // Olá