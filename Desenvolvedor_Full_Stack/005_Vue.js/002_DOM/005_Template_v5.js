new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://www.google.com.br',
        linkHtml: '<a target="_blank" href="http://google.com">Google</a>',
    },
    methods: {
        saudacao: function() {
            this.titulo = "Bom dia!";
            return this.titulo;
        },
    },
});