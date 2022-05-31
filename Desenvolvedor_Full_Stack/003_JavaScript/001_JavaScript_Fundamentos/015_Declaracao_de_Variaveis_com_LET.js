// Let
let numero = 1

console.log('fora e antes do bloco = ', numero); // 1

{
    let numero = 2
    console.log('dentro do bloco = ', numero); // 2
}

console.log('depois do bloco = ', numero); // 1

// o escopo sempre da preferencia para a variável chamada mais próxima.