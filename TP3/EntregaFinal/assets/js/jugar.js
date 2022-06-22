"use strict";

let canvas = /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let fichas = [];
let fichaSelect;
let arrastrar = false;
let tablero;
let juego;


function oMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return { // devuelve un objeto
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top),
    }

}


document.addEventListener('DOMContentLoaded', () => {
    let btnPlay = document.getElementById('btn_play');
    let contenedor_menu = document.getElementById('init_juego');
    let contenedor_juego = document.getElementById('contenedor_juego');
    let areas = document.querySelectorAll('.area');
    let tablero_cont = document.getElementById('tablero');
    btnPlay.addEventListener('click', () => {
        contenedor_menu.classList.add('inactive');
        contenedor_juego.classList.remove('inactive');
        let jugabilidad = document.querySelector('input[name="boardSize"]:checked').value;
        for (let area of areas) {
            area.classList.add('inactive');
        }
        tablero_cont.classList.remove('invisible');
        cargarJuego(Number(jugabilidad));
    });


});

let reset = document.getElementById('btn_reset');
reset.addEventListener('click', () => {
    let jugabilidad = document.querySelector('input[name="boardSize"]:checked').value;
    cargarJuego(Number(jugabilidad));
})


/*let contenedor_menu = document.getElementById('init_juego');
let contenedor_juego = document.getElementById('contenedor_juego');
let areas = document.querySelectorAll('.area');
let tablero_cont = document.getElementById('tablero');
let salir = document.getElementById('btn_exit');
salir.addEventListener('click', () => {
    contenedor_menu.classList.remove('inactive')
    contenedor_menu.classList.add('active');
    contenedor_juego.classList.remove('active');
    contenedor_juego.classList.add('inactive');
    for (let area of areas) {
        area.classList.remove('inactive');
    }
    tablero_cont.classList.add('invisible');


})*/

function cargarJuego(jugabilidad) {
    //dibujamos el tablero y creamos la modalida dde juego
    tablero = new Tablero(ctx, jugabilidad);
    juego = new Juego(tablero, jugabilidad);
    let cantfichas = (((jugabilidad+2)*(jugabilidad+2))/2);
    //generamos las fichas
    for (let i = 0; i < cantfichas; i++) {
        juego.generarFichas('ficha1', juego.getpos1());
        juego.generarFichas('ficha2', juego.getpos2());

    }

    //llamamos a mostrar fichas e inicializamos el timer
    juego.mostrarFichas();
    juego.timer();




}
//cuando se hace click en el mouse
canvas.addEventListener('mousedown', (evt) => {
    //obtenemos la posicion
    var mousePos = oMousePos(canvas, evt);
    //recorremos todas las fichas para ver cual esta clickeada
    for (let i = 0; i < juego.fichas.length; i++) {
        let ficha = juego.fichas[i];
        //si se hizo click en la ficha y no esta ubicada se genera el arrastre
        if (ficha.isClickedCirculo(mousePos)) {
            if (!ficha.estaUbicada()) {
                arrastrar = true;
                fichaSelect = ficha;
                fichaSelect.setPosX(mousePos.x);
                fichaSelect.setPosY(mousePos.y);
                ctx.clearRect(0, 0, width, height);
                tablero.draw();
                juego.mostrarFichas();
                break;

            }
        }
    }


}, false);
//cuando se mueve el mouse dibujamos de nuevo las fichas en las respectivas posiciones
canvas.addEventListener("mousemove", function(evt) {
    let mousePos = oMousePos(canvas, evt);

    if (arrastrar) {
        ctx.clearRect(0, 0, width, height);
        fichaSelect.setPosX(mousePos.x);
        fichaSelect.setPosY(mousePos.y);
        tablero.draw();
        juego.mostrarFichas();
    }
}, false);

//una vez que se suelta la ficha comprobamos en donde termino ese evento
canvas.addEventListener("mouseup", function(evt) {
    let mousePos = oMousePos(canvas, evt);

    arrastrar = false;
    if (fichaSelect) {
        juego.ubicarFicha(mousePos.x, mousePos.y, fichaSelect, ctx);

    }
    fichaSelect = null;

}, false);