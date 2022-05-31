const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]() // 2
funcs[8]() // 8

// Conceito de closure. A função tem consciência do local em que foi definida. 