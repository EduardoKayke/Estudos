function rand([min = 0, max = 1000] = []){ // = [] parametro padrão caso não seja passado o objeto, ai não buga.
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); // Valores entre 50 e 40
console.log(rand([992])); // Valores entre 1000 e 992
console.log(rand([, 10])); // Valores entre 10 e 0
console.log(rand([])); // = Valores entre 0 e 1000
console.log(rand()); // = [] parametro padrão caso não seja passado o objeto, ai não buga.