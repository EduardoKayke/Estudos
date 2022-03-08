new Vue({
    el: '#app',
    data: {
        contador: 0,
    },
    methods: {
        aumentar(){
            this.contador++
        },
        diminuir(){
            this.contador--
            
        },
        resultado(){
            return this.contador >= 5 ?
            "Maior ou igual a 5" : "Menor que 5"
        },
    },
})