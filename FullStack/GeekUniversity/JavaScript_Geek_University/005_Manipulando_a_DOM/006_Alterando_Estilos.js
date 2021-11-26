/**
 * As configurações de estilo via JavaScript seguem os mesmo conceitos e 
 * atributos utilizados via css.
 * 
 * Com uma diferença.
 * 
 * CSS: background-color
 * JavaScript: backgroundColor
 * 
 * Tire os traços e coloque em Label.
 * 
 * CSS: font-size
 * JavaScript: fontSize
 * 
 * 
*/

// red
// black
// darkred
// blue
// orange

// Quadrado.
// let caixaElement = document.querySelector('.caixa');

// caixaElement.style.width = '300px';
// caixaElement.style.height = '200px';
// caixaElement.style.backgroundColor =  'green';

let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        cores = ['red', 'black', 'darkred', 'blue', 'orange']
        document.querySelector('body').style.backgroundColor = cores[i];
    };
}