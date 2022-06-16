// Usando a notação literal
const obj1 = {}
console.log(typeof obj1); // Object

// Object em JS
console.log(typeof Object, typeof new Object); // Function / Object
const obj2 = new Object
console.log(typeof obj2); // Object

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2)); // 6.79
console.log(p2.getPrecoComDesconto().toFixed(2)); // 2249.24

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario()); // 6916
console.log(f2.getSalario()); // 11020

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha); // [Object: null prototype] { nome: 'Ana' }
console.log(typeof filha); // Object

// Uma função famosa que retorna Objeto
// JSON.parse converte em objeto.
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
//Acessando o 'info'
console.log(fromJSON.info); // Sou um JSON
console.log(typeof fromJSON); // Object
console.log(typeof fromJSON.info); // String