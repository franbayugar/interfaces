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
    window.onload = ()=>{
        preloader.classList.add('loaded');

    }
    


})