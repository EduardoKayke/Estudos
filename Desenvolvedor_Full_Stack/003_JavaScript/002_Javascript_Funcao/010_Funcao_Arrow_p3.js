let comparaComThis = function (param) {
    console.log(this === param);
}
// Veremos se os params passados são estritamente iguais ao this nesse contexto do node.
comparaComThis(global) // True, no browser seria o window
comparaComThis(this) // False

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // False, não aponta mais pro global
comparaComThis(obj) // True, aponta pro obj

// Agora veremos esse comportamento com arrow function.
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(this) // True
comparaComThisArrow(global) // False, ou seja aponta para o módulo
comparaComThisArrow(module.exports) // True

const obj2 = {}
comparaComThisArrow = comparaComThisArrow.bind(obj2)
comparaComThisArrow(obj) // false, a arrow function não mudou, se manteve firme. Ou seja, o this continua apontando para onde foi escrito. 
comparaComThisArrow(module.exports) // True

// O This de uma função arrow é um this associado ao contexto ao qual a função foi escrita.
// Mesmo usando o bind não houve a mudança de contexto.