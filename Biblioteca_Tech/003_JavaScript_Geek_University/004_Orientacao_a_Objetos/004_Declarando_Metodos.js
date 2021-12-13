/**
 * Declarando métodos = Método é uma função.
 * 
 * Sempre iniciar a classe com a letra Maiúscula. 
 * A classe é um modelo de dados. 
 * 
 * constructor() = Função do JavaScript (Método), pode ter ou não parâmetro 
 * de entrada.
 * 
 * Em JavaScript tudo é público. Ou seja, podemos fazer acesso mesmo fora da 
 * classe.
 * 
 * Encapsulamento é fazer com que os atributos não sejam manipulados de fora 
 * da classe. Em JavaScript não tem esse conceito. Então usamos de outra 
 * forma.
 * Primeiro passo é colocar o underline na frente do atributo.
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
