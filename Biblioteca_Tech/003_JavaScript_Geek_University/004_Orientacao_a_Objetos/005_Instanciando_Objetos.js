/**
 * Instanciando Objetos.
 * 
 * Sempre iniciar a classe com a letra Maiúscula. 
 * A classe é um modelo de dados. 
 * 
 * constructor() = Função do JavaScript (Método), pode ter ou não parâmetro 
 * de entrada.
 * 
 * Em JavaScript tudo é público. Ou seja, podemos fazer acesso mesmo fora da classe.
 * 
 * Encapsulamento é fazer com que os atributos não sejam manipulados de fora 
 * da classe. Em JavaScript não tem esse conceito. Então usamos de outra 
 * forma.
 * Primeiro passo é colocar o underline na frente do atributo.
 *
 * Um objeto em JavaScript é uma coleção de pares, chave e valor
 * 
*/


class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    // A função do método get é devolver o valor de um atributo.
    get nome(){
        return this._nome;
    }

    // O método set coloca um valor no atributo.
    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }
    
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = `Honda`;
        this._modelo = modelo;
    }
    
    get marca(){
        return this._marca;
    }

    // O set de _marca não vai porque a marca é fixa.

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}




// Instanciação de objetos - Forma 1.

const curso = new Object();
curso.nome = `Programação em JavaScript`;
curso.preco = 27.99;

// console.log(curso); // { nome: 'Programação em JavaScript', preco: 27.99 }

curso['quantidadeAlunos'] = 999;

// console.log(curso); // quantidadeAlunos: 999 

delete curso['quantidadeAlunos']; // Para deletar.
delete curso['preco']; // Para deletar.
delete curso['nome']; // Para deletar.

// console.log(curso); // Ficou apenas { nome: 'Programação em JavaScript' }




// Instanciação de objetos - Forma 2 - Objeto literal. FORMA RECOMENDADA.
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Alfeneiros, nº4',
            condado: 'Surrey',
            cidade: 'Little Whinging',
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'},
        ]
    },
}

console.log(programa);
console.log(programa.nome); // Photoshop
console.log(programa.fabricante.nome); // Adobe
console.log(programa.fabricante.filiais.length); // 2
console.log(programa.fabricante.filiais); // Rio de Janeiro e Recife.

// Outra forma de acessar.
// [ { cidade: 'Rio de Janeiro' }, { cidade: 'Recife' } ]
console.log(programa['fabricante']['filiais'].length); // 2
console.log(programa['fabricante']['filiais']); // Rio de Janeiro e Recife.
// [ { cidade: 'Rio de Janeiro' }, { cidade: 'Recife' } ]

programa.nome = 'Playstation OS';
console.log(programa.nome); // Foi substituído.
console.log(programa);
delete programa.fabricante.filiais;
console.log(programa.fabricante.filiais); // Undefined
// console.log(programa); // Quebrou o programa.




// Instanciação de objetos - Forma 3 - Objeto literal.
const pessoa = {};

pessoa.nome = 'Angelina';

console.log(pessoa);




// PRINCIPAL
// Instanciação de objetos - Forma 4 - Objeto a partir das nossas classes.

const p1 = new Pessoa('Eduardo', 'Kayke')
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); // Função get.
console.log(p1.sobrenome); // Função get.

p1.nome = 'Xuxa'; // Uso do método set.
console.log(p1);

p1.falar('Olá');
p1.comer();
p1.beber();

const fit = new Carro('Fit');
fit.imprimir(); // Honda Fit