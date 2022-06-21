"use strict";
class Juego {
    constructor(tablero, fichasAGanar) {

        this.tablero = tablero;
        this.fichas = [];
        this.mostrarTablero();
        this.limite = fichasAGanar;
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

            ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha1.png', 1);

            this.fichas.push(ficha);
        } else {
            ficha = new Ficha(pos + radius, (Math.random() * ((this.tablero.comienzoY + (this.tablero.ladoImagen * this.tablero.alto)) - this.tablero.comienzoY) + this.tablero.comienzoY), '#ff0000', ctx, radius, 'img/ficha2.png', 2);
            ficha.bloquearFicha();


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

    mostrarFichas() {
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw();
        }
    }

    ubicarFicha(x, y, fichaSelect, ctx) {
        let columnaValida = 0;
        columnaValida = this.tablero.esValida(x, y);
        if (columnaValida > -1 && columnaValida < this.tablero.getNroCol()) {
            let filaValida = this.tablero.ingresoFicha(columnaValida, fichaSelect);
            if (filaValida > -1) {
                this.tablero.caeFicha(fichaSelect, columnaValida, filaValida);
                ctx.clearRect(0, 0, width, height);
                this.tablero.draw();
                this.mostrarFichas();
                if (this.alguienGana(this.tablero.matriz, filaValida, columnaValida, fichaSelect, this.limite)) {;
                    this.terminar();
                    let ganador = document.querySelector("#theWinnerIs");
                    ganador.innerHTML = `El ganador es el jugador número ${fichaSelect.getJugador()}`;
                }

            }
        }
    }

    //chequear si alguien alineo la cantidad necesaria para ganar

    alguienGana(matriz, fila, columna, fichaSelect, cantFichas) {
        let gana = false;
        let enLinea = 0;

        if (matriz.length - fila >= cantFichas) { // solo busca hacia abajo si hay la cantidad de filas necesarias en esa direccion
            enLinea = this.abajo(matriz, fila, columna, fichaSelect, cantFichas);
        }
        if (enLinea >= cantFichas) {
            gana = true;
        } else {
            enLinea = this.derecha(matriz[fila], columna, fichaSelect, cantFichas);
            if (enLinea >= cantFichas) {
                gana = true;
            } else { //si no llego a la cantidad en esa direccion, busca en la direccion opuesta a partir de la posicion original,y suma los elementos
                enLinea += this.izquierda(matriz[fila], columna, fichaSelect, cantFichas) - 1;
            }
        }
        if (enLinea >= cantFichas) {
            gana = true;
        } else {
            enLinea = this.derechaAbajo(matriz, fila, columna, fichaSelect, cantFichas);
            if (enLinea >= cantFichas) {
                gana = true;
            } else {
                enLinea += this.izquierdaArriba(matriz, fila, columna, fichaSelect, cantFichas) - 1;
            }
        }
        if (enLinea >= cantFichas) {
            gana = true;

        } else {
            enLinea = this.derechaArriba(matriz, fila, columna, fichaSelect, cantFichas);
            if (enLinea >= cantFichas) {
                gana = true;
            } else {
                enLinea += this.izquierdaAbajo(matriz, fila, columna, fichaSelect, cantFichas) - 1;
            }
        }
        if (enLinea >= cantFichas) {
            gana = true;
        }
        return gana;

    }

    //Recorridos para chequear cantidad fichas alineadas
    abajo(matriz, fila, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && matriz[fila][columna] == fichaSelect.getJugador()) {
            fila++;
            contador++;
        }

        return contador;
    }

    derecha(arrHilera, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && columna < this.tablero.ancho && arrHilera[columna] == fichaSelect.getJugador()) {
            columna++;
            contador++;

        }

        return contador;
    }

    izquierda(arrHilera, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && columna >= 0 && arrHilera[columna] == fichaSelect.getJugador()) {
            columna--;
            contador++;
        }

        return contador;
    }
    derechaArriba(matriz, fila, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && fila < this.tablero.alto && columna < this.tablero.ancho && matriz[fila][columna] == fichaSelect.getJugador()) {
            fila++;
            columna++;

            contador++;
        }
        return contador;
    }

    derechaAbajo(matriz, fila, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && fila >= 0 && columna < this.tablero.ancho && matriz[fila][columna] == fichaSelect.getJugador()) {
            fila--;
            columna++;

            contador++;
        }
        return contador;
    }

    izquierdaArriba(matriz, fila, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && fila >= 0 && columna >= 0 && matriz[fila][columna] == fichaSelect.getJugador()) {
            fila--;
            columna--;

            contador++;
        }
        return contador;
    }

    izquierdaAbajo(matriz, fila, columna, fichaSelect) {
        let contador = 0;

        while (contador <  this.limite && fila < this.tablero.alto && columna >= 0 && matriz[fila][columna] == fichaSelect.getJugador()) {
            fila++;
            columna--;

            contador++;
        }
        console.log(contador);
        return contador;
    }

    terminar(){
        this.fichas.forEach(ficha => {
            ficha.bloquearFicha();
        })

    }





}