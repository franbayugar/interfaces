document.addEventListener('DOMContentLoaded', ()=>{

    let hamburguesa = document.querySelector('.hamburguesa');
    let cierre = document.querySelector('.cerrar_menu');
    
    const abrirMenu = () => {
        document.querySelector('.menu').classList.add('active');
        document.querySelector('.modal').classList.add('active');

    }

    const cerrarMenu = () => {
        document.querySelector('.menu').classList.remove('active');
        document.querySelector('.modal').classList.remove('active');

    }
    
    hamburguesa.addEventListener('click', abrirMenu);
    cierre.addEventListener('click', cerrarMenu);
    


})