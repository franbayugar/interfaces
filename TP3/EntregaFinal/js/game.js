"use strict";
class Juego {
    constructor(tablero, ficha1, ficha2) {
        this.tablero = tablero;
        this.arrayFichas1 = [];
        this.arrayFichas2 = [];
        this.mostrarTablero();
        this.generarFichas(ficha1, 10);
        this.generarFichas(ficha2, 900);

    }

    mostrarTablero() {
        this.tablero.crearTablero();
    }

    generarFichas(ficha, pos){
        for (let i = 0; i < 10; i++){
            let radius = 45;
            let ficha1;
            if(pos == 10){

                ficha1 = new Ficha(pos+radius,radius + 2*radius*i,'#ff0000',ctx, radius, 'img/ficha1.png');
            }else{
                ficha1 = new Ficha(pos+radius,radius + 2*radius*i,'#ff0000',ctx, radius, 'img/ficha2.png');
            }
            ficha1.draw(canvas.width);
            this.arrayFichas1.push(ficha1);
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