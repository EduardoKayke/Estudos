// Aula 124 Web Moderno

function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar() // Bom dia! Meu nome é Anônimo!

obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é Rafael!

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Bom dia! Meu nome é Obj3!

// Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // True
console.log(MeuObjeto.__proto__ === Function.prototype); // True
console.log(Function.prototype.__proto__ === Object.prototype); // True
console.log(Object.prototype.__proto__ === null); // True