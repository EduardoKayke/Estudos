/**
 * Funções Closures = Contexto Léxico de uma função.
 */

let xuxa = `Global`; // Pode ser acessada globalmente no programa.

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = `Local`; // Pode ser acessada localmente no bloco/contexto.
    imprimir();
    console.log(xuxa); // Chamou a local.
}

outra(); // Chamou o Global. E também a local.

// As funções costumam chamar as variáveis de dentro. Se não, as de fora.
// Closure é o escopo criado quando a função é declarada.

//NOVO EXEMPLO

let variavelGlobal = `Variável Global`;

function externa(){
    let variavelGlobal = `Variável Local`;

    function interna(){
        return variavelGlobal;
    }

    return interna;
}

let executa = externa();

console.log(executa());
