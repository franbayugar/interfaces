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
        let ficha1 = juego.generarFichas('ficha1', juego.getpos1());
        ficha1.draw();
        fichas.push(ficha1);

        let ficha2 = juego.generarFichas('ficha2', juego.getpos2());
        ficha2.draw();
        fichas.push(ficha2);



    }
    console.table(fichas);
}


canvas.addEventListener('mousedown', (evt) => {
    var mousePos = oMousePos(canvas, evt);

    for (let i = 0; i < fichas.length; i++) {
        if (fichas[i].isClickedCirculo(mousePos)) {
                


            ctx.clearRect(0, 0, width, height);

        }
    }


})