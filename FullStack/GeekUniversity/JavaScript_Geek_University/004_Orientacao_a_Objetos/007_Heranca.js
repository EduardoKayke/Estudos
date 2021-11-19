/**
 * Herança.
 * 
 * Conseguir reaproveitar código de outrass classes.
 * Seria como utilizar uma classe base, e outra classe que se torna uma
 * subclasse dessa classe base. Ou seja, uma extensão.
 */

/** 
 * Funcionarios
 *      nome,
 *      sobrenome,
 *      email,
 *      cpf,
 *      funcao,
 *      registro
 * 
 * Clientes
 *      nome,
 *      sobrenome,
 *      email,
 *      cpf,
 *      renda
 * 
 * Funcoes
 *      descricao,
 *      salario
*/

// Criando classes para usar a herança

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    //Métodos extras.

    get nomeCompleto(){
        return this._nome + ` ` + this._sobrenome;
    }

    set nomeCompleto(nomeCompleto){
        //Transforma a string em um array onde cada elemento do array
        //será as partes da string separadas por espaço.
        nomeCompleto = nomeCompleto.split(` `);

        //Remove e retorna o elemento da posição e do array.
        this._nome = nomeCompleto.shift();

        //Junta os elementos do array em uma string, separando cada 
        //elemento por espaço.
        this._sobrenome = nomeCompleto.join(` `);
    }
}

// Aqui entra a herança. Para deixar as classes menores e sem repetições.

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro = registro;
    }

    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const c1 = new Cliente(`Felicity`, `Jones`, `felicity@gmail.com`, `123.456.789-10`, 6789.44)
const c2 = new Cliente(`Eduardo`, `Kayke`, `eduardo@gmail.com`, `444.444.444-44`, 8974.34)

console.log(c1);
console.log(c2);
console.log(c1.nomeCompleto);
console.log(c2.nomeCompleto);

c1.nomeCompleto = `Xuxa Meneguel`;
console.log(c1);