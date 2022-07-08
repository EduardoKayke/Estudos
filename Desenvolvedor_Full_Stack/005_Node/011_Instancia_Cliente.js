const contadorA = require('./009_Instancia_Unica')
const contadorB = require('./009_Instancia_Unica')

// chama a função, repare no final da linha ()
const contadorC = require('./010_Instancia_Nova')()

const contadorD = require('./010_Instancia_Nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor); // 3

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor); // 1