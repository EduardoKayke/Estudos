new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://www.google.com.br'
    },
    methods: {
        saudacao: function() {
            this.titulo = "Bom dia!";
            return this.titulo;
        },
    },
});