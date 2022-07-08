// acessamos o link http://files.cod3r.com.br/curso-js/funcionarios.json - esse é um arquivo json de funcionarios.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// importar o axios
const axios = require('axios')

axios.get(url).then(response => {
    // dentro do data dessa resposta temos a lista de funcionarios
    const funcionarios = response.data
    console.log(funcionarios);
})