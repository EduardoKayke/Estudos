const a = 1
const b = 2
const c = 3

// Melhorias no atributo com EcmaScript 2015 ES6
const obj1 = { a: a, b: b, c: c} // Antigamente quando atributos iguais.
const obj2 = { a, b, c } // Nova versão, atributos iguais.

const nomeAttr = 'nota'
const valorAttr = 7.87

// 2 exemplo Modo antigo
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3); // { nota: 7.87 }

// 2 exemplo Modo novo
const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4); // { nota: 7.87 }

// 3 exemplo Modo antigo
const obj5 = {
    funcao1: function() {

    }
}

// 3 exemplo Modo novo
const obj6 = {
    funcao2() {
        //...
    }
}