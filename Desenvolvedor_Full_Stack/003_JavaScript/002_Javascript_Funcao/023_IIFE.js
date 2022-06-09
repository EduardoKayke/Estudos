// IIFE -> Immediately Invoked Function Expression

// Função auto invocada.
// Essa função é ótima para fugir do escopo global do browser.
// Tudo o que for criado dentro dessa função será escopo local.

(function() {
    console.log('Será executado na hora');
    console.log('Foge do escopo mais abrangente!');
})()
