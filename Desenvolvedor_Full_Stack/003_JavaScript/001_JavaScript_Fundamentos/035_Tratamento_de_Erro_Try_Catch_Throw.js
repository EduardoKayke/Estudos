// Criando um ERRO!

// function imprimirNomeGritado(obj){
//     console.log(obj.name.toUpperCase() + '!!!');
// }

// const obj = { nome: 'Roberto'}
// imprimirNomeGritado(obj)

// A solução aqui é a seguinte:

function tratarErroELancar(erro){
    // throw new Error('... sua mensagem')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // Prefira mandar mensagens com identificador. Pra não assustar o user.
        nome: erro.name, // nome: 'TypeError',
        msg: erro.message, // msg: "Cannot read properties of undefined (reading 'toUpperCase')",
        date: new Date // date: 2022-06-04T04:36:36.124Z
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final');
    }
}

const obj = { nome: 'Roberto'} // O erro está aqui, lá na função está name e aqui nome.
imprimirNomeGritado(obj)