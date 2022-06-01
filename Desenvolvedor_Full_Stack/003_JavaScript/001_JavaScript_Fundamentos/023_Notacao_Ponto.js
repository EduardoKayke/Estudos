console.log(Math.ceil(6.1)); // 7 (Notação Ponto)

const obj1 = {}

obj1.nome = 'Bola' // (Notação Ponto)
obj1['nome'] = 'Bola 2' // Mesma forma de fazer
console.log(obj1.nome); // 'Bola 2 

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('exec...');
    }
}

const obj3 = new Obj('Cadeira')
const obj4 = new Obj('Mesa')

console.log(obj3.nome); // Cadeira
console.log(obj4.nome); // Mesa
obj3.exec() // exec...