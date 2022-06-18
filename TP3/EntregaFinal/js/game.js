"use strict";
class Juego {
    constructor(tablero, ficha1, ficha2) {
        this.tablero = tablero;
        this.arrayFichas1 = [];
        this.arrayFichas2 = [];
        this.mostrarTablero();
        //ficha1.posx1 = this.tablero.comienzoX - 50;
        //  posx2 = this.tablero.comienzoX + this.tablero.ancho * this.tablero.ladoImagen + 150;
        this.generarFichas(ficha1, this.tablero.comienzoX - 120);
        this.generarFichas(ficha2, this.tablero.comienzoX + this.tablero.ancho * this.tablero.ladoImagen + 30);

    }

    mostrarTablero() {
        this.tablero.crearTablero();
    }

    generarFichas(ficha, pos) {
        for (let i = 0; i < 10; i++) {
            let radius = 45;
            if (pos == this.tablero.comienzoX - 160) {

                ficha = new Ficha(pos + radius, radius + 2 * radius * i, '#ff0000', ctx, radius, 'img/ficha1.png');
            } else {
                ficha = new Ficha(pos + radius, radius + 2 * radius * i, '#ff0000', ctx, radius, 'img/ficha2.png');
            }
            ficha.draw(canvas.width);
            this.arrayFichas1.push(ficha);
        }
    }


    getMousePos(canvas, evt) {
        let ClientRect = canvas.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - ClientRect.left),
            y: Math.round(evt.clientY - ClientRect.top)
        }
    }

}