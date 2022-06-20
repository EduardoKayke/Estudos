// Herança, objetivo reutilizar código.

const ferrari = {
    mdoelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
// __proto__ pra acessar o protótipo do objeto.
console.log(ferrari.prototype); // undefined
console.log(ferrari.__proto__); // {}
console.log(ferrari.__proto__ === Object.prototype); // True

console.log(volvo.__proto__ === Object.prototype); // True
console.log(Object.prototype.__proto__); // Null

function MeuObjeto() {}
console.log(typeof Object); // Function
console.log(typeof MeuObjeto); // Function
console.log(Object.prototype, MeuObjeto.prototype); 
// {}, MeuObjeto {}
