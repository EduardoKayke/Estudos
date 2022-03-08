new Vue({
    el: '#app',
    data: {
        contador: 0,
        contador2: 0,
    },
    computed: {
        resultado(){
            return this.contador >= 5 ?
            "Maior ou igual a 5" : "Menor que 5"
        },
    },
    watch: {
        contador(novo, antigo){
            setTimeout((() => {
                this.contador = 0;
            }), 2000)
        },
    },
    methods: {
        aumentar(){
            this.contador++
        },
        diminuir(){
            this.contador--
            
        },
    },
})