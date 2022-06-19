"use strict";

class Ficha {
    constructor(posX, posY, color, ctx, radio, imagen) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.ctx = ctx;
        this.radio = radio;
        this.selected = false;
        this.bloqueada = false;
        this.image = new Image();
        this.image.src = imagen;
        this.image.onload = () => {
            this.draw();
        };
    }

    getPosX() {
        return this.posX;
    }

    setPosX(x) {
        this.posX = x;
    }

    getPosY() {
        return this.posY;
    }

    setPosY(y) {
        this.posY = y;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    bloquearFicha(){
        this.bloqueada = true;
    }

    estaUbicada(){
        return this.bloqueada;
    }
    draw() {
        this.ctx.fillStyle = this.image;

        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);

        this.ctx.drawImage(this.image, this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);

        // this.ctx.beginPath();
        // if (this.color == "#ff0000"){
        //     this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        // }else{
        //     this.ctx.arc(width - this.radio, this.posY, this.radio, 0, 2 * Math.PI);
        // }
        // let imagenFicha = this.ctx.createPattern(this.image, "repeat");
        // this.ctx.fillStyle = this.imagenFicha;
        // this.ctx.fill();

    }

    isClickedCuadrado(posicion) {
        //funciona solamente con cuadrado
        if ((posicion.x < this.posX + this.radio / 2 && posicion.x >= this.posX - this.radio / 2) &&
            (posicion.y < this.posY + this.radio / 2 && posicion.y >= this.posY - this.radio / 2)) {
            return true;
        } else {
            return false;
        }
    }

    isClickedCirculo(posicion) {
        if (Math.sqrt((posicion.x - this.posX) * (posicion.x - this.posX) + (posicion.y - this.posY) * (posicion.y - this.posY)) <=
            this.radio) {
            return true;
        } else {
            return false;
        }
    }
}