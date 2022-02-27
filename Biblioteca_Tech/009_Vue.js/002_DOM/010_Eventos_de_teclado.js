new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
    },
    methods: {
        somar(passo, event){
            console.log(passo, event);
            this.contador += passo;
        },
        atualizarXY(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // nãoNavegar(event){
        //     event.preventDefault();
        // }, mesmo efeito que prevent
        // parar(event){
        //     event.stopPropagation()
        // }, Usei o .stop que da na mesma, veja html.

        //Aula Eventos de Teclado
        exibirAlerta(){
            alert('Estou te alertando!')
        },
    },
});