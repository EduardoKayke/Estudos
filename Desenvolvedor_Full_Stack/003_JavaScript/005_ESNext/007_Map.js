// O map serve para substitui a chave por uma função, objeto ou valor.

const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'));
// { framework: false }

console.log(tecnologias.get('react').framework);
// false

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((v1, ch1) => {
    console.log(ch1, v1);
    //[Function] 'Função'
    //{} 'Objeto'
    //123 'Número'
})

// has é uma função que diz se o elementoe está ou não contido dentro desse map
console.log(chavesVariadas.has(123));// true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));// 

console.log(chavesVariadas.size); // 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // substituiu o 
console.log(chavesVariadas);
// Map { [Function] => 'Função', {} => 'Objeto', 123 => 'b' }