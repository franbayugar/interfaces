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
    btnPlay.addEventListener('click', ()=>{
        contenedor_menu.classList.add('invisible');
        contenedor_juego.classList.remove('invisible');
        let jugabilidad = document.querySelector('input[name="boardSize"]:checked').value;
        for(let area of areas){
            area.classList.add('invisible');
        }
        tablero_cont.classList.remove('invisible');
        cargarJuego(Number(jugabilidad));
    });


});


function cargarJuego(jugabilidad) {
    tablero = new Tablero(ctx, jugabilidad);
    juego = new Juego(tablero, jugabilidad);


    for (let i = 0; i < 10; i++) {
        juego.generarFichas('ficha1', juego.getpos1());
        juego.generarFichas('ficha2', juego.getpos2());


    }
    juego.mostrarFichas();
    juego.timer();




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

    }
    fichaSelect = null;

}, false);
