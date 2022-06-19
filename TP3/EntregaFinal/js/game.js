"use strict";
class Juego {
    constructor(tablero) {

        this.tablero = tablero;
        this.fichas = [];
        this.mostrarTablero();
        this.pos1 = this.tablero.comienzoX - 120;
        this.pos2 = this.tablero.comienzoX + this.tablero.ancho * this.tablero.ladoImagen + 30;


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
            let radius = 45;
            if (pos == this.tablero.comienzoX - 120) {

                ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha1.png');

                this.fichas.push(ficha);
            } else {
                ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha2.png');


                this.fichas.push(ficha);
                
            }
            
            //   this.arrayFichas1.push(ficha);
        }

    


    getMousePos(canvas, evt) {
        let ClientRect = canvas.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - ClientRect.left),
            y: Math.round(evt.clientY - ClientRect.top)
        }
    }

    mostrarFichas(){
        for(let i = 0; i< this.fichas.length; i++){
            this.fichas[i].draw();
        }
        console.table(this.fichas);
    }


}