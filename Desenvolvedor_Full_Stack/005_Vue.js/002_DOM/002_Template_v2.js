new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
    },
    methods: {
        saudacao: function() {
            console.log(this)
            return this.titulo
        }
    },
});