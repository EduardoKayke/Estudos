new Vue({
    el: '#app',
    data: {
        contador: 0,
        contador2: 0,
    },
    computed: {
        resultado(){
            console.log('método computado resultado chamado...');
            return this.contador >= 5 ?
            "Maior ou igual a 5" : "Menor que 5"
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