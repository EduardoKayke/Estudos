const verdadeira = true;
const falsa = false;

if (true)
    console.log('Exec...');
else
    console.log('Não exec...');

if (false)
    console.log('Não exec...');
else
    console.log('Exec...');

// Outro exemplo.

const hora = 5;
let saudacao;

if (hora < 12 && hora >= 6) {
    saudacao = 'Bom dia!';
} else if (hora < 18 && hora >= 12) {
        saudacao = 'Boa tarde!';
} else if (hora <= 24 && hora >= 18){
    saudacao = 'Boa noite!';
} else if (hora >= 0 && hora < 6) {
    saudacao = 'Madrugada... Vai dormir!';
} else {
    console.log('Esse valor não existe!');
}

if (hora <= 24 && hora >= 0) {
    console.log(saudacao);
} else {
    console.log('Por favor, corrija os valores!');
}