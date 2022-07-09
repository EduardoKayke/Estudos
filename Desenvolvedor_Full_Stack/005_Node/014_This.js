console.log(this === global); // false
console.log(this === module); // false
console.log(this === module.exports); // true
console.log(this === exports); // true

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports); //false
    console.log(this === module.exports); // false
    console.log(this === global); // true
}

logThis()

// O this dentro da função acessa o global, fora é o module.exports