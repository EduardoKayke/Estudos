// Destructuring em função, passando objeto

function rand({ min = 0, max = 1000} = {}) { // = {} parametro padrão caso não seja passado o objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 })); // Valores entre 50 e 40
console.log(rand({ min: 955 })); // Valores entre 955 e 1000
console.log(rand({})); // Valores entre 0 e 1000
console.log(rand()); // = {} parametro padrão caso não seja passado o objeto, ai não buga.