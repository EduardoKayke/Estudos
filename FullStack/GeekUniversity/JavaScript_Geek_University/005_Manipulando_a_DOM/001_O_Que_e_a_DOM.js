/**
 * Quando criamos um Documento HTML, toda a estrutura é chamada de DOM.
 * 
 * Document Object Model.
 * 
 * JavaScript e a API DOM
 * 
 * Uma das grandes funcionalidades da linguagem JavaScript é o uso para 
 * manipulação da DOM. Usamos JavaScript para percorrer e manipular os 
 * elementos da DOM.
*/


// document = Documento HTML
// querySelector = API DOM do JavaScript(Função JavaScript)
// .link = Classe do HTML
// #link = Nesse caso seria o ID do HTML.
// link = Nesse caso seria a própra tag.

let a = document.querySelector('.link')

console.log(a.innerText); // Ver o conteúdo(texto) da tag a.
console.log(a.parentNode); // Para ver o nó da tag a.
console.log(a.parentNode.parentNode); // Para ver o nó da tag body.
console.log(a.parentNode.parentNode.parentNode); // Para ver o nó da tag html. Se tentar passar do document da Null.

//Para ver os filhos de HTML.
console.log(a.parentNode.parentNode.childNodes);
//NodeList(3) [head, text, body.corpo]
//O text é entre o espaço de head e body. O valor do text é \n.
// nodeValue: "\n    " Ou seja, virou um novo elemento.

console.log(a.parentNode.parentNode.firstChild);
// Pega o primeiro filho de HTML = head
console.log(a.firstChild);
// Pega o primeiro filho de a = texto

console.log(a.parentNode.parentNode.lastChild);
// Pega o último filho de HTML = body

// Para ver os irmãos das tags do html.
console.log(a.parentNode.parentNode.firstChild.nextSibling);
// nextSibling é o próximo irmão. 
// a.parentNode.parentNode.firstChild.nextSibling
// a - body   -   html   -   head   -  #text
// que é o value text da separação entre head e body.
// Toda vez que tiver enter o value \n prestar atenção.
// podemos usar o previousSibling também, seria irmão anterior.