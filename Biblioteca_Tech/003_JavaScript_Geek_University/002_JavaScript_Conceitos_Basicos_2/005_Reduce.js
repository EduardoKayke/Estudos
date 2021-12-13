/**
 * Reduce = Reduz os dados em pequenas partes.
 */

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
console.log(precos);

var soma = 0;

for (var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
};

// console.log(soma);

soma = 0;

precos.forEach(function(valor){
    soma += valor;
});

// console.log(soma);

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);

/**
 * Como funciona o reduce.
 * 
 * [ 4.66, 3.78, 9.78, 1.34, 5.32 ]
 * 
 * Primeira execução: 4.66, 3.78 (Índice 0 e índice 1).
 * Soma e retorna este valor.
 * 
 * Nas demais execuções: Pega o retorno da execução anterior e o próximo
 * valor. (Índice 2...)
 * 
 * 1 = 4.66 + 3.78 -> 8.44
 * 2 = 8.44 + 9.78 -> 18.22
 * 3 = 18.22 +  1.34 -> 19.56
 * 4 = 19.56 + 5.32 -> 24.88 
 */

// Reduce e Map juntos, exemplo:

function adicionarTaxa(valor){
    return valor + 5;
};

var ret = precos.map(adicionarTaxa).reduce(somar);
console.log(ret); // 49.88 pois somou 5 em cada operação do reduce.(4)

// Exemplo filter/map/reduce

function precoMaiorQue4(valor){
    return valor > 4; // filtra os valores do array para maiores que 4.
};

ret = precos.filter(precoMaiorQue4).map(adicionarTaxa).reduce(somar);
console.log(ret); // 34.76

/**
 * Explicação.
 * Usamos o filtro pra pegar os valores acima de 4.
 * Usamos o map para criar o novo array e adicionar uma taxa de mais 5.
 * Usamos o reduce que recebeu esse novo array e aplicou a soma com os 
 * valores destrinchados.
 */