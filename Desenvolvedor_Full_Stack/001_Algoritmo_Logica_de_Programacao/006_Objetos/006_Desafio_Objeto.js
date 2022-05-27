const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(nascimento.exibir());