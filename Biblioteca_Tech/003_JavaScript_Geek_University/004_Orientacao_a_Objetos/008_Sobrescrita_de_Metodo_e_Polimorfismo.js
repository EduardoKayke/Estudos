/**
 * Sobrescrita de Método e Polimorfismo.
*/

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

    imprimirDados(){
        console.log(`${this.nome} ${this.sobrenome}`);
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
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }
    //Sobrescrita de método.
    imprimirDados(){
        super.imprimirDados();
        console.log(`Registro: ${this.registro}. \nSalário: R$:${this.funcao.salario}`);
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

const prog = new Funcao(`Programador`, 5987.44);
const f1 = new Funcionario(`Paulo`, `fernandes`, `paulofernandes@gmail.com`, `234.345.456-34`, prog, `3453453`);

const c1 = new Cliente(`Pedro`, `Silveira`, `pedro@gmail.com`, `234.345.567-09`, 45669.09);

f1.imprimirDados(); //Pessoa
c1.imprimirDados(); // Pessoa

/**
 * Sobrescrita de método - Overwriting.
 * 
 * Polimorfismo - Dois objetos do mesmo tipo tendo comportamentos 
 * diferentes.
*/