/**
 * Funções Fábrica.
 * 
 * Conhecida como function factory é uma Fábrica de Objetos.
 */

function fabricarCurso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarCurso(`Programação em JavaScript`, 27.99));
console.log(fabricarCurso(`Criação de API's com Django Rest Framework`, 35.99));

// Outro exemplo

cursos = []

for(let i = 0; i < 5; i++){
    cursos.push(fabricarCurso(`Curso: ${i + 1}`, `${19.99 + i * 3}`))
}

console.log(cursos);