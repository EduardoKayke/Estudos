const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1} - ${nome}`);
    // 1 - Aghata 
    // 2 - Aldo 
    // 3 - Daniel 
    // 4 - Raquel
    console.log(array);
    // [ 'Aghata', 'Aldo', 'Daniel', 'Raquel' ]
})


aprovados.forEach(nome => console.log(nome))
// Aghata
// Aldo
// Daniel
// Raquel


const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)
// Aghata
// Aldo
// Daniel
// Raquel