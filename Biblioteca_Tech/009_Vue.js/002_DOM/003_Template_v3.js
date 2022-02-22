new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://www.google.com.br'
    },
    methods: {
        saudacao: function() {
            console.log(this)
            return this.titulo
        },
    },
});