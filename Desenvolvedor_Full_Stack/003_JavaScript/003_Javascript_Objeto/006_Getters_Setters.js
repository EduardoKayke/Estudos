// Get lê
// Set Altera
// get e set são funções que permitem os valores serem acessados.

const sequencia = {
    _valor: 1, // convenção de desenvolvedores, dito como privado.
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // 1 / 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor); // 1000 / 1001
sequencia.valor = 900 // ignorado por causa do nosso if(valor > this._valor)
console.log(sequencia.valor, sequencia.valor); // 1002 / 1003

// O que foi feito aqui...
// Criamos uma variável _valor, e resolvemos controlar o que pode ou não ser feito com get e set.