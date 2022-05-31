const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]() // 10
funcs[8]() // 10

// Porque a variável não tem escopo de bloco. Na próxima aula veremos como fica com o let.