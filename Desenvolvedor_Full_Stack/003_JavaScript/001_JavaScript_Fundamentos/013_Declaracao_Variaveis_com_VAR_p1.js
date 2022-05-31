// A variável sera será escopo global. Ela funciona nos blocos, desde que não seja uma função.
{{{{ var sera = 'Será?' }}}}
console.log(sera);

function teste(){
    var local = 'var de função, não pode ser chamada fora da função!'
    console.log(local); // Funciona
}
teste()
// console.log(local); // Não funciona


// A variável(let) sera2 será escopo local e não global.
{{{{ 
    let sera2 = 'Será?' 
    console.log(sera2);
}}}}

// A constante só funciona pelo modo de escopo local e não global.
{{{{ 
    const sera3 = 'Será?' 
    console.log(sera3);
}}}}