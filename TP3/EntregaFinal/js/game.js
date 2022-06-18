"use strict";
class Juego {
    constructor(tablero, ficha1, ficha2) {

        this.tablero = tablero;
        this.arrayFichas1 = [];
        this.arrayFichas2 = [];
        this.mostrarTablero();
        this.pos1 = this.tablero.comienzoX - 120;
        this.pos2 = this.tablero.comienzoX + this.tablero.ancho * this.tablero.ladoImagen + 30;
        this.generarFichas(ficha1, this.pos1);
        this.generarFichas(ficha2, this.pos2);




    }

    getpos1() {
        return this.pos1;
    }

    getpos2() {
        return this.pos2;
    }



    mostrarTablero() {
        this.tablero.crearTablero();
    }

    generarFichas(ficha, pos) {
        for (let i = 0; i < 10; i++) {
            let radius = 45;
            if (pos == this.tablero.comienzoX - 120) {

                ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha1.png');

                return ficha;
            } else {
                ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha2.png');


                return ficha;
            }
  
            //   this.arrayFichas1.push(ficha);
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