let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('#app').removeChild(this);
    }
}