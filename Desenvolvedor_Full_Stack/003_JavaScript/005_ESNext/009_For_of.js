for (let letra of 'Cod3r') {
    console.log(letra);
    // C
    // o
    // d
    // 3
    // r
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
    console.log(i); // percorre em cima do índice
    // 0
    // 1
    // 2
}

for(let assunto of assuntosEcma) {
    console.log(assunto);
    // Map
    // Set
    // Promise
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for(let assunto of assuntosMap) {
    console.log(assunto);
    // [ 'Map', { abordado: true } ]
    // [ 'Set', { abordado: true } ]
    // [ 'Promise', { abordado: false } ]
}

for(let chave of assuntosMap.keys()){
    console.log(chave);
    // Map
    // Set
    // Promise
}

for(let valor of assuntosMap.values()){
    console.log(valor);
    // { abordado: true }
    // { abordado: true }
    // { abordado: false }
}

for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor);
    // 'Map', { abordado: true }
    // 'Set', { abordado: true }
    // 'Promise', { abordado: false }
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra);
    // a
    // b
    // c
}