"use strict";

let canvas =  /** @type { HTMLcanvasElement} */ document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

document.addEventListener('DOMContentLoaded',  ()=> {
    cargarJuego();   
    
});

function cargarJuego() {
    let tablero = new Tablero(ctx);
    let juego = new Juego(tablero, 'ficha1', 'ficha2');
}