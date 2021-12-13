/**
 * AJAX (XMLHttpRequest) - Asynchronous JavaScript and XML
*/

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');


btn.onclick = function(){

    //Limpar o conteúdo da div.
    div.innerHTML = '';

    //Instanciando objeto ajax.
    let ajax = new XMLHttpRequest();

    //Abrir uma conexão. GET, POST, PUT, DELETE...
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //Enviar a requisição.
    ajax.send(null);

    ajax.onreadystatechange = function(){

        //Cria elemento span.
        let spanNone = document.createElement('span');

        // Cria a variável nome.
        let txtNome = '';

        /**
         * ajax.readyState -> 0 => Antes da conexão ser aberta.
         * ajax.readyState -> 1 => Após abrir a conexão.
         * ajax.readyState -> 2 => Headers (cabeçalhos) foram recebidos.
         * ajax.readyState -> 3 => Carregando o corpo da requisição.
         * ajax.readyState -> 4 => Os dados estão prontos para o uso.
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                // Transformar os dados JSON para array.
                usuario = JSON.parse(ajax.responseText);

                //Se o usuário possui nome.
                if(usuario['name'] !== null || false){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                };

                //Adiciona o texto ao span e o span à div.
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                //Limpar o input(campo de digitação)
                input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);

                //Adiciona o texto ao span e o span à div.
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        };
    };
};