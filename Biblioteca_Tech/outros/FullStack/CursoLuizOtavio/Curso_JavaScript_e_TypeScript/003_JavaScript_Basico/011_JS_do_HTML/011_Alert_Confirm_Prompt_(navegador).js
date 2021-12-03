// alert('Estudante de programação!');
/*
- alert é um atalho pra chamar uma função que está dentro do
objeto window. Semelhante ao log que está dentro do console
(console.log('')).
- Escrevaa window no console do navegador e veja as funções.
- O atalho é window.alert('')

- Confirm
- window.confirm('Deseja realmente apagar?')
- pop-up pro usuário.
- Retorna um valor booleano, true ou false.

- Prompt
- window.prompt('Qual seu nome?')
- Para que o useário escreva.

- Função dentro de window é método. 

- Aprendemos a usar o parseFloat, parseInt.
- Podemos usar Number também.
- n1 = Number(n1);
- n1 = parseFloat(n1);
- n1 = parseInt(n1);
*/

// Exercício. Fazer conta de soma.

let n1 = prompt('Digite um número.');
let n2 = prompt('Digite outro número.');

n1 = Number(n1);
n2 = Number(n2);

const resultado = n1 + n2;
alert(`O resultado da soma foi ${resultado}.`);