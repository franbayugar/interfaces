"use strict";

window.addEventListener('DOMContentLoaded', () => {
    let personajeSelect;
    let obstaculos = [];
    let enJuego;

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
        enJuego = true;
        console.log(enJuego);


        //generamos nuevos obstaculos cada 1 segundo
        let intObs = setInterval(() => {
            if (enJuego) {
                generarObs();
            }
        }, 800);
        //chequeamos que no haya colision
        let interval = setInterval(() => {
            //recorremos el arreglo de obstaculos y vamos preguntando si hubo colision en ese especifico objeto
            for (let obs of obstaculos) {
                if ((obs.colision(personajeSelect))) {
                    terminarJuego();
                }
            }
        }, 300);


    }

    function generarObs() {
        //si hay menos de 2 obstaculos generados al momemnto entonces
        if (obstaculos.length < 2) {
            //obtenemos un numero random para definir el bicho
            let numero = ((Math.floor(Math.random() * 3)));
            let obstaculo1;
            switch (numero) {
                //creamos los obstaculos y les pasamos por parametro las clases que van a utilizar
                case 0:
                    obstaculo1 = new Obstaculo("alienFloor", "alien_walk");
                    break;
                case 1:
                    obstaculo1 = new Obstaculo("alienSky", "alien_fly");
                    break;
                case 2:
                    obstaculo1 = new Obstaculo("starPoints", "starMove");
                    break;
            }
            //pusheamos el bicho al arreglo
            obstaculos.push(obstaculo1);
        } else {
            //si ya tenemos 2 obstaculos mapeados borramos el primero 
            obstaculos[0].eliminar();
            obstaculos.splice(0, 1)
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
        enJuego = false;
        //    document.getElementById('juego_ejecucion').classList.add('oculto');
        let animados = document.querySelectorAll('.gameContainer>div');

        animados.forEach(animado => {
            animado.style.animationPlayState = 'paused';
        })

        document.getElementById('juego_final').classList.remove('oculto');

    }




});