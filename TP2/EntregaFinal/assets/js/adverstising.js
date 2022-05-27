
document.addEventListener('DOMContentLoaded', ()=>{

    let btnClose = document.getElementById('close_adv');
    
    btnClose.addEventListener('click', ()=>{
        closeAdv();
    })
    
    const closeAdv = ()=>{
        document.querySelector('.publicidad').classList.add("oculto");
    }

    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        let barra = document.querySelector('.barra_busqueda');
        let logo = document.querySelector('.logo');
        barra.classList.toggle('lupita', window.scrollY>15);
        logo.classList.toggle('invisible', window.scrollY>15);

       
    }
});