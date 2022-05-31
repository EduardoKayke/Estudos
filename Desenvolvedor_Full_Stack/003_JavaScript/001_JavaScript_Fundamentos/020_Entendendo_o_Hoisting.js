// Não é legal usar o Hoisting.
// Conceito Hoisting
// O efeito do Hoisting é "Jogar pra cima"

// Veja que a não foi declarado ainda.
// var = a (Isso aqui seria o Hoisting, uma variável criada sem valor, pois chamamos algo que usou uma variável sem ela ter sido definida ainda.)
console.log('a =', a); // a = undefined (Ou seja, o programa não trava. Só a variável não foi dado um valor. Como se estivesse criando um var a antes desse console.log, mas sem o valor de 2.)
// vamos declarar agora
var a = 2
// E agora vamos ler esse código novamente após a declaração
console.log('a =', a); // a = 2

// Dentro de uma função seria a mesma coisa também.

function teste(){
    console.log('b =', b); // b = undefined
    var b = 45
    console.log('b =', b); // b = 45
}
teste()


// Com o LET não ocorre o HOISTING
