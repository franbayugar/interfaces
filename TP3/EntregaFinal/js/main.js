"use strict";

let canvas = /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let fichas = [];
let drag = false;



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
    let tablero = new Tablero(ctx);
    let juego = new Juego(tablero, 'ficha1', 'ficha2');


    for (let i = 0; i < 10; i++) {
        juego.generarFichas('ficha1', juego.getpos1());
        juego.generarFichas('ficha2', juego.getpos2());

    }
    juego.mostrarFichas();






canvas.addEventListener('mousedown', (evt) => {
    var mousePos = oMousePos(canvas, evt);

    for (let i = 0; i < juego.fichas.length; i++) {
        let ficha = juego.fichas[i];
        if (ficha.isClickedCirculo(mousePos)) {
            ficha.setPosX(mousePos.x);
            ficha.setPosY(mousePos.y);

                ctx.clearRect(0, 0, width, height);

            tablero.draw();
            juego.mostrarFichas();
        }
    }


});
}


