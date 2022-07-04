
"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const contenedorPj = document.getElementById('character');
    let personaje = new Personaje(contenedorPj);
    personaje.caminar();

window.onkeyup = function (event) {
       
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) { 
        // contempla barra espaciadora flechita arriba  y la W
        if(personaje.estado == 'caminando'){
            personaje.saltar();
        }
     } 

     if (event.keyCode === 40 || event.keyCode === 83) { 
        // contempla flechita abajo  y la S
        if(personaje.estado == 'caminando'){
            personaje.deslizar();
        }
     } 
}


});