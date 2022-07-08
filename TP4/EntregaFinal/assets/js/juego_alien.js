"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let personajeSelect;
    let obstaculos = [];

    const contenedorPj = document.getElementById('character');
    // const contObstaculo1 = document.getElementById('alien');
    // const contObstaculo2 = document.getElementById('airAlien');

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

        jugar();
    }


    function jugar() {


        let intObs = setInterval(() => {

            generarObs();
        }, 1000);

        let interval = setInterval(() => {
            for(let obs of obstaculos){
            if ((obs.colision(personajeSelect))) {
                terminarJuego();
            }

        }
        }, 10);
    }

    function generarObs(){

        if(obstaculos.length<2){
            let numero = ((Math.floor(Math.random()*2)));
            let obstaculo1;
            switch(numero){
                case 0: obstaculo1 = new Obstaculo("alienFloor", "alien_walk"); break;
                case 1: obstaculo1 = new Obstaculo("alienSky", "alien_fly");break;

            }
            obstaculos.push(obstaculo1);
        }else{
            obstaculos[0].eliminar();
            obstaculos.splice(0,1)
        }
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