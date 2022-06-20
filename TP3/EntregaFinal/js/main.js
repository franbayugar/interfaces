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
    cargarJuego();

});


function cargarJuego() {
    tablero = new Tablero(ctx);
    juego = new Juego(tablero, 'ficha1', 'ficha2');


    for (let i = 0; i < 10; i++) {
        juego.generarFichas('ficha1', juego.getpos1());
        juego.generarFichas('ficha2', juego.getpos2());


    }
    juego.mostrarFichas();




}

canvas.addEventListener('mousedown', (evt) => {
    var mousePos = oMousePos(canvas, evt);

    for (let i = 0; i < juego.fichas.length; i++) {
        let ficha = juego.fichas[i];
        if (ficha.isClickedCirculo(mousePos)) {
            if (!ficha.estaUbicada()) {
                arrastrar = true;
                fichaSelect = ficha;
                ficha.setPosX(mousePos.x);
                ficha.setPosY(mousePos.y);
                ctx.clearRect(0, 0, width, height);
                tablero.draw();
                juego.mostrarFichas();
            }
        }
    }


}, false);

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

canvas.addEventListener("mouseup", function(evt) {
    let mousePos = oMousePos(canvas, evt);

    arrastrar = false;
    if (fichaSelect) {
        juego.ubicarFicha(mousePos.x, mousePos.y, fichaSelect, ctx);
        juego.fichas.forEach(ficha => {
            if (ficha.getJugador() == fichaSelect.getJugador()) {
                ficha.bloquearFicha();
            } else {
                ficha.desbloquearFicha();
            }
        });
    }
    fichaSelect = null;

}, false);