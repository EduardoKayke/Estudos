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
    let github_user = document.querySelector('input[name=github_user');

    //Limpando o input
    let user = github_user.value;
    github_user.value = '';

    //GET, POST, PUT, DELETE (Poderiam ser)
    axios.get(`https://api.github.com/users/${user}`)
        // Se sucesso execute
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode(`Não encontrado`);
            }
            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);            
        })
        // Caso falhe execute
        .catch(function(error){
            txtNome = document.createTextNode('Falha na requisição.')
            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}