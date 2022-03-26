class Animal {
    constructor (familia) {
        this.familia = familia;
    };

    andar = () => 'andando...';
};

class Cachorro extends Animal {
    constructor (nome, idade) {
        super('Carnívoros')
        this.nome = nome
        this.idade = idade
    };

    latir = () => `${this.nome}: au! au!`;
};

// Criar um Objeto, nomeamos de rex.
let rex = new Cachorro('Rex', 2);

console.log(rex);
console.log(rex.latir());
console.log(rex.andar());
console.log(rex.familia);

let max = new Cachorro('Max', 3);

console.log(max.latir());

console.log('______________________SEPARADOR ________________________');

// ----------------------- MEU EXEMPLO DE CLASSES --------------------------

class Pessoa {
    constructor (nome, idade, raca, peso) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        this.peso = peso;
    };

    geral = () => `${this.nome}, ${this.idade}, ${this.raca}, ${this.peso}Kg.`

    massa = () => `${this.peso}kg`;

    soma = (n1, n2) => n1 + n2;

    recomendado (peso) {
        if(peso > 70){
            return `${peso} Hooo my god`
        } else {
            return `${peso} Good`
        }
    }
};

let eduardo = new Pessoa('Eduardo', 27, 'Branco', 80);

console.log(eduardo.geral());
console.log(eduardo.massa());
console.log(eduardo.soma(2, 3));
console.log(eduardo.recomendado(120));
console.log(eduardo.recomendado(70));