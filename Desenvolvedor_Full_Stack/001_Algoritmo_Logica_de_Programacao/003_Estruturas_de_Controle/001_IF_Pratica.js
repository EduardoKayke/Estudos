// If sempre retorna verdadeiro ou falso. Executando caso true.

// Logo após um if pode aparecer.
// Setença de código.
// Bloco de código.
// Outra estrutura de controle.

if (true)
    console.log('Vai ser executado!');

if (false)
    console.log('Não vai ser executado!');

console.log('Fim!');

// Outro exemplo.

const nota = 8;
const bomComportamento = false;

if (nota >= 7 && bomComportamento)
    console.log('Parabéns!');

if (nota < 7 || !bomComportamento)
    console.log('Reprovado!');

console.log('Fim!');

// Outro exemplo.

const nota1 = 9.3;

if (nota1 >= 9) {
    console.log('Quadro de Honra!');
    console.log('Parabéns');
};
console.log('Fim!');
    