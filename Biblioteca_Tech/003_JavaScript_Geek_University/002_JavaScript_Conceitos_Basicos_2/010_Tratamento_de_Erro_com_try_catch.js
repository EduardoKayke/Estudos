/**
 *  Tratamento de erros com Try Catch
 */

// console.log(nome); // ReferenceError

// console.log('oi...');

// console.log(4.oi);

try {
    console.log(nome);
} catch (e) {
    console.log(`Não foi possível imprimir nome.`);
    console.log(e.name);
    console.log(e.message);
}

console.log(`oii...`);

// Lançando erros.

function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0) {

        // Lançando uma exceção (erro)
        throw("Os valores devem ser positivos.");

    } else {
        return num1 / num2;
    }
}

try {
    let ret = dividir(8, 0);
    console.log(ret);
} catch(e) {
    console.log(`Não foi possível dividir.`);
} finally{
    console.log(`Vamos continuar.`);
}
