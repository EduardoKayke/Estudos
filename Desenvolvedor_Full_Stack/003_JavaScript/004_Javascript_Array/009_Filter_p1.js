const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

//console.log(produtos.filter(function(p) {
//    if(p.preco > 2400 && p.fragil == true) {
//        return p.preco && p.fragil
//    }
//}));
// [ { nome: 'Notebook', preco: 2499, fragil: true } ]
// [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro, fragil));
// [ { nome: 'Notebook', preco: 2499, fragil: true } ]
// [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]