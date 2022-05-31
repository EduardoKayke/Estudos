// Var
var numero = 1

console.log('fora e antes do bloco = ', numero); // 1

{
    var numero = 2
    console.log('dentro do bloco = ', numero); // 2
}

console.log('depois do bloco = ', numero); // 2