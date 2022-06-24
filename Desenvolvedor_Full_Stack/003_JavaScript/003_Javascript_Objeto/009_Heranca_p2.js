// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não é recomendado fazer dessa forma.

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1); // 'A', foi buscar no avo
console.log(filho.attr0); // '0'

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f48',
    velMax: 324 // Shadowing, sombreamento que escreve em cima de outro valor.
}

const volvo = {
    modelo: 'V40',
    status() {
        // O super é pra usar o method do prototype
        return `${this.modelo}: ${super.status()}`
    }
}

//esse métdo estabelece a relação de protótipos entre dois objetos.
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
//{ modelo: 'f48', velMax: 324 }
console.log(volvo);
//{ modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status());
// V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status());
// 300Km/h de 324Km/h