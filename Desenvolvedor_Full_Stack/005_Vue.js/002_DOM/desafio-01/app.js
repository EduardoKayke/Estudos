new Vue({
    el: '#desafio',
    data: {
        nome: 'Eduardo',
        idade: 27,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },
    methods: {
        math(){
            return Math.random().toPrecision(1) * 9;
        },
    },
});