new Vue({
    el: '#app',
    data: {
        titulo: "Usando VueJS 2!"
    },
    methods: {
        alterarTitulo(event) {
            this.titulo = event.target.value
        },
    },
});