new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
    },
    methods: {
        somar(){
            this.contador++
        },
        atualizarXY(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
    },
});