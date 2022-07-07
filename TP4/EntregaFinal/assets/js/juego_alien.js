"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let personajeSelect;
    let obstaculo1;
    let obstaculo2;

    const contenedorPj = document.getElementById('character');
    const contObstaculo1 = document.getElementById('alien');
    const contObstaculo2 = document.getElementById('airAlien');

    document.getElementById("btn_jugar").addEventListener('click', () => {
        crearJuego();
    })

    function crearJuego() {
        document.getElementById('juego_menu').classList.add('oculto');
        document.getElementById('juego_ejecucion').classList.remove('oculto');
        let personaje = document.querySelector('input[name="personaje"]:checked').value;
        console.log(personaje);
        if (personaje === 'cody') {
            personajeSelect = new Personaje(contenedorPj, 'caminando_cody', 'saltando_cody', 'deslizando_cody');
        } else {
            personajeSelect = new Personaje(contenedorPj, 'caminando_haagar', 'saltando_haagar', 'deslizando_haagar');

        }
        obstaculo1 = new Obstaculo(contObstaculo1);
        obstaculo2 = new Obstaculo(contObstaculo2);

        jugar();
    }



    function jugar() {
        let interval = setInterval(() => {
            if ((obstaculo1.colision1(personajeSelect)) || (obstaculo2.colision2(personajeSelect))) {
                terminarJuego();
            }

        }, 10);
    }

    window.onkeydown = function(event) {

        if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
            // contempla barra espaciadora flechita arriba  y la W
            if (personajeSelect.estado == 'caminando') {
                personajeSelect.saltar();
            }
        }

        if (event.keyCode === 40 || event.keyCode === 83) {
            // contempla flechita abajo  y la S
            if (personajeSelect.estado == 'caminando') {
                personajeSelect.deslizar();
            }
        }
    }

    function terminarJuego() {
        document.getElementById('juego_ejecucion').classList.add('oculto');
        document.getElementById('juego_final').classList.remove('oculto');

    }




});