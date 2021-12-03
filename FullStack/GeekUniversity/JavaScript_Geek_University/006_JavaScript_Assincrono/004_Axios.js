/**
 * A ferramenta, a biblioteca mais utilizada atualmente. Tanto pra web,
 * quanto pra mobile.
 * 
 * Essa é uma bibliotca, um cliente HTTP baseado em Promises. 
 * Navegador e Node.js = Javascript.
*/

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar a div.
    div.innerHTML = '';

    //Criar o span.
    let spanNome = document.createElement('span');

    //Criar o txtNome.
    let txtNome = '';

    //Recuperar o input.
    let github_user = document.querySelector('input[name=github_user').Value;

    //
}