/**
 * Prommises são funções JavaScript que não influenciam a linha de tempo
 * da aplicação. São promessas que quando finalizadas os dados são 
 * apresentados. 
 * 
 * Promises é uma melhoria para ser usado no lugar do AJAX. 
 * 
 * Lembrete: Promises são funções.
*/

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');


//Criando a promise(A variável pode ser qualquer nome.)
let promise = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;

        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else{
                    reject('Não foi encontrado nenhum usuário com este nome!')
                }
            }
        }
    });
}

btn.onclick = function(){
    //Limpar a div.
    div.innerHTML = '';

    //Criar o span
    let spanNome = document.createElement('span');

    //Criar a variável nome.
    let txtNome = '';

    //Executando a promise.
    promise()
        //resolve (sucesso)
        .then(function(response){
            // Se o usuário tem nome.
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '150px');
                img.setAttribute('height', '150px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuário encontrado não possui nome.');
            }

            //Adiciona o texto ao span e o span a div.
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error)
            
            //Adiciona o texto ao span e o span a div.
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}