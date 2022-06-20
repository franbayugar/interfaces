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
        //genera matriz
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

    esValida(x, y) {
        let col = -1;
        if (y > this.comienzoY - 100 && y < this.comienzoY) {
            let i = 0;
            while (i < this.ancho) {
                if (x < this.arrCol[i]) {
                    col = i;
                    return col;
                }
                i++;
            }
        }

        return col;
    }

    getNroCol() { /**Devuelve el ancho del tablero */
        return this.ancho;
    }

    ingresoFicha(nroCol, ficha) {
        let i = this.alto - 1;

        while (i >= 0) {
            if (this.matriz[i][nroCol] == 0) {
                this.matriz[i][nroCol] = ficha.getJugador();

                return i;
            }
            i--;
        }
        return i;
    }


    caeFicha(ficha, fila, columna) {
        let x = this.comienzoX + fila * this.ladoImagen + this.ladoImagen / 2;
        let y = this.comienzoY + columna * this.ladoImagen + this.ladoImagen / 2;
        ficha.setPosX(x);
        ficha.setPosY(y);
        console.table(this.matriz);
    }


    draw() {
        let imagenTablero = this.ctx.createPattern(this.image, "repeat");
        this.ctx.fillStyle = imagenTablero;
        this.ctx.fillRect(this.comienzoX, this.comienzoY, (this.image.width * this.ancho), (this.image.height * this.alto));

    }

}