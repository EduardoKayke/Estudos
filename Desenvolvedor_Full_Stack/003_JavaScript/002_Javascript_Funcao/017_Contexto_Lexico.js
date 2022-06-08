const valor = 'Global'

function  minhaFuncao() {
    console.log(valor); // Global
}


function exec() {
    const valor = 'Local'
    minhaFuncao() // pegou o valor Global, mesmo chamando em outro local, o contexto dela é outro.
}

exec()