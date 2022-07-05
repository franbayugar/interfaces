
"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let personajeSelect;
    const contenedorPj = document.getElementById('character');

    document.getElementById("btn_jugar").addEventListener('click',()=>{
        crearJuego();
    })

    function crearJuego(){
        document.getElementById('juego_menu').classList.add('oculto');
        document.getElementById('juego_ejecucion').classList.remove('oculto');
        let personaje = document.querySelector('input[name="personaje"]:checked').value;
        console.log(personaje);
        if(personaje === 'cody'){
            personajeSelect = new Personaje(contenedorPj, 'caminando_cody', 'saltando_cody', 'deslizando_cody');
        }else{
            personajeSelect = new Personaje(contenedorPj, 'caminando_haagar', 'saltando_haagar', 'deslizando_haagar');

        }
    }

window.onkeyup = function (event) {
       
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) { 
        // contempla barra espaciadora flechita arriba  y la W
        if(personajeSelect.estado == 'caminando'){
            personajeSelect.saltar();
        }
     } 

     if (event.keyCode === 40 || event.keyCode === 83) { 
        // contempla flechita abajo  y la S
        if(personajeSelect.estado == 'caminando'){
            personajeSelect.deslizar();
        }
     } 
}


});