"use strict";

let canvas = /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;



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


}
canvas.addEventListener('mousedown', (evt) => {
    var mousePos = oMousePos(canvas, evt);

    if (ctx.isPointInPath(mousePos.x, mousePos.y)) {

        ctx.clearRect(0, 0, width, height);

    }
})