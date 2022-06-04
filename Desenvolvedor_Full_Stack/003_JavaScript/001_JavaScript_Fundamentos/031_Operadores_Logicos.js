// Operadores Lógicos.

/**
 *  Condição e
 *  v e v -> v
 *  v e f -> f
 *  v e ? -> f
 * 
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 * !v -> f
 * !f -> v
 */

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2 
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

//comprarSorvete: true, comprarTv50: true, comprarTv32: false,manterSaudavel: false
console.log(compras(true, true)); 

// comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false
console.log(compras(true, false)); 

// comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false
console.log(compras(false, true)); 

// comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true
console.log(compras(false, false));