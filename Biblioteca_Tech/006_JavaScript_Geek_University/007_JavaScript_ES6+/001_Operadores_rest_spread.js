// Rest/Spread (juntar/espalhar valores) -> ...

//PS: São os três pontinhos ( ... )

// Exemplo 1 
function total(...precos){
    let total = 0;
    precos.forEach(p => total += p);
    return total;
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2)); // 54.56
console.log(total(23, 67)); // 90
console.log(total(3, 6, 77)); // 86
console.log(total()); // 0

// Exemplo 2 
let frutas1 = ['Manga', 'Uva', 'Melância'];
let frutas2 = ['Abacate', 'Morango', 'Jaca'];
let compras = [...frutas1, ...frutas2];

console.log(compras);

// Exemplo 3 
let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

// Forma sem rest e spread = alunos.push(novo);

// Com rest e spread
let todos = [...alunos, novo];
console.log(todos);