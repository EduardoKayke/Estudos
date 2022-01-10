const numeros = [1, 2, 3, 4, 5, 6];

// Revisão
numeros.forEach(function(elemento, indice) {
    console.log(`${indice} - ${elemento}`);
});

// Revisão
for (const n of numeros) {
    console.log(n);
}

// Revisão
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}