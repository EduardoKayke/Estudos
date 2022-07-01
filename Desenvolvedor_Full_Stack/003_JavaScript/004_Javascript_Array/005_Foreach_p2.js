// Foreach por trás dos panos.

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice) => {
    console.log(`${indice + 1} - ${nome}`);
})

// 1 - Aghata
// 2 - Aldo
// 3 - Daniel
// 4 - Raquel