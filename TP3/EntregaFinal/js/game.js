"use strict";
class Juego {
    constructor(tablero, ficha1, ficha2) {
        this.tablero = tablero;
        this.arrayFichas1 = [];
        this.mostrarTablero();
        this.generarFichas(ficha1, 10);
        this.generarFichas(ficha2, 50);

    }

    mostrarTablero() {
        this.tablero.crearTablero();
    }

    generarFichas(ficha, pos){
        for (let i = 0; i < 10; i++){
            let radius = 15;

            let ficha1 = new Ficha(pos+radius,radius + 2*radius*i,'#ff0000',ctx, radius);
            ficha1.draw(canvas.width);
            this.arrayFichas1.push(ficha1);
        }
    }

}