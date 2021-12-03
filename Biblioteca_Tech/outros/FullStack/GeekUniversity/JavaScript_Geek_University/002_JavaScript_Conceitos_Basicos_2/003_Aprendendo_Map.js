// O map pega um array e com isso podemos mudar os dados.

var valores = [2, 4, 6, 8, 10];
console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;
});

console.log(dobro);

// De outra forma

function dobrar(valor){
    return valor * 2;
}

dobro = valores.map(dobrar);
console.log(dobro);

// Podemos encadear maps para realizar múltiplas transformações.

function soma4(valor){
    return valor + 4;
};

function dividir5(valor){
    return valor / 5;
};

var resultado = valores.map(dobrar).map(soma4).map(dividir5);
console.log(resultado);