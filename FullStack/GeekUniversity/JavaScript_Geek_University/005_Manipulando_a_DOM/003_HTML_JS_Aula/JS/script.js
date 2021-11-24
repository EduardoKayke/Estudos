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