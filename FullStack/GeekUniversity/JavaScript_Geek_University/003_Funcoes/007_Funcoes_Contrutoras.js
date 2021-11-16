/**
 * Funções Construtoras.
 */

// Criando uma função construtora.
function Pessoa(n, s, raca = `Humano`){
    //Atributos privados só conseguimos fazer uso dentro da função construtora.
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //Atributo público pode ser acessado fora da função construtora.
    this.raca = raca;

    //Método privado só conseguimos fazer uso dentro da função construtora.
    let imprimirDados = function(){
        console.log(`
        Nome: ${nome},
        Idade: ${idade},
        Peso: ${peso},
        Altura: ${altura},
        Sexo: ${sexo},
        Raça: ${raca},
        `);
    }

    // Método público conseguimos acessar fora da função contrutora.
    this.fazerAniversario = function(){
        idade += 1;
        imprimirDados();
    }

    this.getIdade = function(){
        return idade;
    }
}

//Instanciando um objeto.
const angelina = new Pessoa(`Angelina`, `Feminino`);

console.log(angelina); // Só apareceu o (this) que é público.
console.log(angelina.peso);// Undefined pq está privado. (let)
console.log(angelina.raca); // Humano. Pq está público.
angelina.fazerAniversario(); // Aniversário = 1
angelina.fazerAniversario(); // Aniversário = 2

//Instanciar um novo objeto.
const eduardo = new Pessoa(`Eduardo`, `Masculino`);

eduardo.fazerAniversario();
console.log(eduardo.getIdade()); // 1 ano
console.log(typeof(Pessoa)); // Function
console.log(typeof(eduardo)); // Object