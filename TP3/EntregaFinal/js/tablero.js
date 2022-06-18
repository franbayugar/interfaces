"use strict";

class Tablero {
    constructor(ctx) {
        this.alto = 5;
        this.ancho = 5;
        this.comienzoX = 200;
        this.comienzoY = 200;
        this.ladoImagen = 100;
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "img/tablero_forma.png";
        this.matriz = this.generarMatriz();
        this.arrCol = this.generarArregloColumnas();

    }

    crearTablero() {
        let tablero = this;
        this.image.onload = () => {
            tablero.draw();
        };
    }

    generarMatriz() {
        let matriz = [this.alto];
        for (let i = 0; i < this.alto; i++) {
            matriz[i] = [];
            for (let j = 0; j < this.ancho; j++) {
                matriz[i][j] = 0;
            }
        }
        return matriz;
    }

    generarArregloColumnas() {
        let arregloColumnas = [];
        arregloColumnas[0] = this.comienzoX + this.ladoImagen;
        for (let i = 1; i < this.ancho; i++) {
            arregloColumnas[i] = (arregloColumnas[i - 1] + this.ladoImagen);
        }
        return arregloColumnas;
    }

    draw() {
        let imagenTablero = this.ctx.createPattern(this.image, "repeat");
        this.ctx.fillStyle = imagenTablero;
        this.ctx.fillRect(this.comienzoX, this.comienzoY, (this.image.width * this.ancho), (this.image.height * this.alto));

    }

}