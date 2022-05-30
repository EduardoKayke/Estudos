const prod1= {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
}
console.log(prod2);
console.log(prod2.preco);

// Isso tudo não é a mesma ciosa que JSON.
// Vamos transformar o prod2 em JSON

'{ "nome": "Camisa Polo", "preco": 79.90 }' // Isso é um JSON, um formato textual.