// Uma factory retorna um novo objeto (instancia)
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}