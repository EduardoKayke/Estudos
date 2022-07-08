// acessamos o link http://files.cod3r.com.br/curso-js/funcionarios.json - esse é um arquivo json de funcionarios.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// importar o axios
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
} 

axios.get(url).then(response => {
    // dentro do data dessa resposta temos a lista de funcionarios
    const funcionarios = response.data
    // console.log(funcionarios);

    // Achar a mulher chinesa com menor salário
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(funcionario);
    //{ id: 443,
    //    nome: 'Shela',
    //    sobrenome: 'Nowell',
    //    email: 'snowellca@upenn.edu',
    //    genero: 'F',
    //    cidade: 'Yufa',
    //    pais: 'China',
    //    empresa: 'Quinu',
    //    salario: 2435.61 }
})
