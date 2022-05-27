document.addEventListener('DOMContentLoaded', ()=>{

    let hamburguesa = document.querySelector('.hamburguesa');
    let cierre = document.querySelector('.cerrar_menu');
    
    const abrirMenu = () => {
        document.querySelector('.menu').classList.add('active_menu');
        document.querySelector('.modal').classList.add('active');
        document.querySelector('.menu').classList.remove('out_menu');
    }

    const cerrarMenu = () => {
        document.querySelector('.menu').classList.add('out_menu');
         document.querySelector('.menu').classList.remove('active_menu');
        document.querySelector('.modal').classList.remove('active');

    }
    
    hamburguesa.addEventListener('click', abrirMenu);
    cierre.addEventListener('click', cerrarMenu);
    
    let preloader = document.querySelector('#js-preloader');
    setTimeout(()=>{
        preloader.classList.add('loaded');

    }, 1500)
    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        let barra = document.querySelector('.barra_busqueda');
        let logo = document.querySelector('.logo');
        barra.classList.toggle('lupita', window.scrollY>15);
        logo.classList.toggle('invisible', window.scrollY>15);

       
    }


})