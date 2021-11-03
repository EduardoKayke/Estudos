// Var = Redeclarar os valores toda vez que reescreve var.
var nome = 'Eduardo';
var nome = 'Jair';

console.log(nome);

// Não crie variável sem atribuir const ou let.
nome = 'Eduardo';
// Pois isso cria uma variável global, podendo afetar outras variáveis do sistema.

// Usando let, não podemos redeclarar a variável.
let nome1 = 'Kayke';
// let nome = 'Eduardo'; Não funciona.
nome1 = 'Eduardo'; // Assim podemos redeclarar a variável let.
console.log(nome);