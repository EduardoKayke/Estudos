function sempreRetornaUm() {
    return 1;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

function textoOuNumero(retornaTexto) {
    return retornaTexto ? "" : 123;
}

let resultado = textoOuNumero(true);
console.log(resultado);
console.log(textoOuNumero(false));