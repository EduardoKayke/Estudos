// CÓDIGO NÃO EXECUTÁVEL.
// Ideias sobre o Paradigmas de orientação a objeto.

// Procedural 
processamento(valor1, valor2, valor3) // Uma função que manipula dados.

// OO - Dados que possuem funções.
objeto = {
    valor1, // <-- Atributos.
    valor2,
    valor3,
    processamento() { // <-- Função, comportamento.
        //...
    }
}

// Invocando processamentos a partir do dado.
objeto.processamento() // O objeto funciona como uma capsula. Onde possui atributos e funções próprias.
// O foco passou a ser o objeto e antes eram as funções.

// Princípios importantes:
// 1. abstração - mapear a realidade e trazer pro software
// Trazer os atributos dos objetos para dentro do software. Exemplo do detran:
// Condutor, Placa, renavam, IPVA

// 2. encapsulamento - detalhes de implementação escondidos e mostrar interface para a interação com objeto.
// Mostrar apenas o que o user precisa. Exemplo de um carro.
// Saber como abastecer, como dirigir, como trancar o carro.
// Não precisa saber como funciona o motor, ou os mecânismos por trás do objeto.

// 3. herança (prototype)
// Exemplo do carro:
// Um carro tem um motor. Um carro pode receber características da fábrica. Assim como um filho recebe da mãe.

// 4. polimorfismo - multiplas formas
// exemplo: um celular, pode ser galaxy, iphone, android etc...