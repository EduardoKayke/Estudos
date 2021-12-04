// Criando Objeto através de uma factory function.

const pessoa1 = (nome, sobrenome) => {
    return{
        andar: () => console.log(`${nome} ${sobrenome} está andando.`)
    }
};

const p1 = pessoa1(`Felicity`, `Jones`)
console.log(p1); // { andar: [Function: andar] }
// console.log(typeof(p1));
// p1.andar();

//Criando objeto através de uma função construtora.

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando.`);
    }
}

const p2 = new Pessoa2(`Eduardo`, `Kayke`)
console.log(p2); 
// Pessoa2 {
//     nome: 'Eduardo',
//     sobrenome: 'Kayke',
//     andar: [Function (anonymous)]
//   }

// console.log(typeof(p2));
// p2.andar();

// Criando objeto através de uma classe.
class Pessoa3{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando.`);
    }
}

const p3 = new Pessoa3(`Maria`, `Silvana`)
console.log(p3); // Pessoa3 { nome: 'Maria', sobrenome: 'Silvana' }
// console.log(typeof(p3));
// p3.andar();