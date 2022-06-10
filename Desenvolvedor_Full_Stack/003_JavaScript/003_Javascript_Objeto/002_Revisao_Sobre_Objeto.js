// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto); // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

delete produto.preco
delete produto['marca do produto']

console.log(produto); // { nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: () => {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro);
// {
//     modelo: 'A4',
//     valor: 89000,
//     proprietario: {
//       nome: 'Raul',
//       idade: 56,
//       endereco: { logradouro: 'Av Gigante', numero: 1000 }
//     },
//     condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
//     calcularValorSeguro: [Function: calcularValorSeguro]
// }

delete carro.condutores
delete carro.proprietario.endereco

console.log(carro);
// {
//     modelo: 'A4',
//     valor: 89000,
//     proprietario: { nome: 'Raul', idade: 56 },
//     calcularValorSeguro: [Function: calcularValorSeguro]
// }