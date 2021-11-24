// Se o elemento tiver ID você consegue recuperar ele dessa forma.
// Perceba que está no singular. ELEMENT.
let itexto = document.getElementById('produto');
console.log(itexto);

// Perceba que está no plural. ELEMENTS.
// Capturamos todas as tags span.
let spans = document.getElementsByClassName('span');
console.log(spans);

//Aqui capturamos a class.
let elements = document.getElementsByClassName('texto');
console.log(elements);


//Fazendo essa manipulação da DOM, podemos ler valores.
// textContent e innerHTML dão o mesmo resultado.
console.log(elements[0].textContent); // Ler o valor do primeiro span.
console.log(elements[1].innerHTML); // Ler o valor do segundo span.

//Fazendo essa manipulação da DOM, podemos alterar valores.
elements[0].textContent = 'JavaScript';
elements[1].textContent = 'Geek University';
console.log(elements[0].textContent);
console.log(elements[1].innerHTML);

//Se eu quiser só o primeiro elemento.
// let elements = document.getElementsByClassName('texto')[0];
// console.log(elements.innerHTML);

//Podemos mudar tudo o que quisermos.
elements[0].style.textTransform = 'uppercase';
// deixamos em letra maiúscula. JAVASCRIPT

//Da pra utilizar o querySelector no lugar dos outros.
// Podemos fazer todas as buscas de elementos atráves do querySelector.
let inp = document.querySelector('body div.container div.row input');
// Pode ser mais simples, pode ser só a tag, só o ID, só a classe.
let inp1 = document.querySelector('body'); // tag
let inp2 = document.querySelector('#div1'); // ID
let inp3 = document.querySelector('.row'); // class
// Se quisermos todos os elementos usamos querySelectorAll
let inp4 = document.querySelectorAll('.texto'); // class
// Outra forma de buscar um elemento.
let inp5 = document.querySelector('input[name=produto]');
console.log(inp);
console.log(inp1);
console.log(inp2);
console.log(inp3);
console.log(inp4);
console.log(inp5);

//Exemplo 1 de como criar os eventos do html diretamente pelo javascript.
// let btn = document.querySelector('.btn');
// btn.onclick = function(){
    // alert('Eu estou aqui!');
// }

//Exemplo 2 de como criar os eventos do html diretamente pelo javascript.
let btn = document.querySelector('.btn');
let inp6 = document.querySelector('input[name=produto]');
btn.onclick = function(){
    alert(`Temos o texto ${inp6.value}`);
}