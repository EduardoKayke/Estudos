/**
 * Eventos Inline
 * 
 * Aqui é onde daremos vida ao HTML. Usamos a linguagem de JavaScript para 
 * interagir entre os elementos do HTML.
*/

// <button onclick="mostrarAlerta();">Por favor, clique-me!</button>
// Colocamos essa função no button do HTML. 
// Isso é um evento Inline.
function mostrarAlerta(){
    alert('O botão foi clicado!')
}

function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...'
}
// o this que colocamos como parâmetro no HTML é o próprio span.

function mudarCor(){
    // As cores poderiam ser em hexadecimal. #000000 (black).
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];
    // O floor pega somente o valor inteiro que sobrar.
    const numero = Math.floor((Math.random() * cores.length) + 1);

    //document.bgColor está obsoleto no DOM Nível 2 HTML . A alternativa 
    //recomendada é o uso do estilo CSS, background-colorque pode ser 
    //acessado através do DOM com document.body.style.backgroundColor
    document.body.style.background = cores[numero];
}

function escreverTexto(input){
    let span = document.getElementById('texto')

    span.innerHTML = input.value;
}