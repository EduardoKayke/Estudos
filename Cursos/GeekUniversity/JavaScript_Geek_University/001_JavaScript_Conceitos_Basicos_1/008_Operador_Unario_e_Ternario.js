// Operador unário e operação ternária.

// Unário.
var idade = 25;
idade++;

console.log(idade);

// Ternária.
var sexo = `m`;

if(sexo === `m` || sexo === `M`){
    console.log(`Masculino`);
}else{
    console.log(`Feminino`)
}

// Operador ternário = diminuir a quantidade de linhas.
// Executa = ?
// Caso contrário = :
// Ternário, três partes.
console.log(sexo === `m`|| sexo === `M` ? `Masculino` : `Feminino`);
// Funciona apenas para if e else simples. Else If já não funciona.