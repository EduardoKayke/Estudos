/**
 * Declarando Atributos
 * 
 * Sempre iniciar a classe com a letra Maiúscula. 
 * A classe é um modelo de dados. 
 * 
 * constructor() = Função do JavaScript
 * 
 * Em JavaScript tudo é público. Ou seja, podemos fazer acesso mesmo fora da 
 * classe.
*/


class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
}

class Carro {
    constructor(modelo){
        this.marca = `Honda`;
        this.modelo = modelo;
    }    
}