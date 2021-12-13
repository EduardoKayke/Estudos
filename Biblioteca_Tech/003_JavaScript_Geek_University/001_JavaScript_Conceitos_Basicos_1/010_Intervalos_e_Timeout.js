// Intervalos e timeout

function escrever() {
    console.log(`Geek University`);
}

function escrever2() {
    console.log(`Geek University 2`);
}

// Intervalo
setInterval(escrever, 1000); // 1000 = 1 segundo

// Timeout (Tempo esgotado), executa apenas uma vez.
setTimeout(escrever2, 3000); // 3000 = 3 segundos