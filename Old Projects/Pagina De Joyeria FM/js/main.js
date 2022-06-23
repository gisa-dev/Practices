let altura = document.body.scrollHeight - window.innerHeight;

let fondo = document.getElementById('fondo');

window.onscroll = () =>{
    let anchoFondo = (window.pageYOffset / altura) * 700;
    if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + '%';
    }
}