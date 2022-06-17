"use strict";

class Ficha{
    constructor(posX, posY, color, ctx, radio){
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.ctx = ctx;
        this.radio = radio;
    }

    getPosX(){
        return this.posX;
    }

    setPosX(x){
        this.posX = x;
    }

    getPosY(){
        return this.posY;
    }

    setPosY(y){
        this.posY = y;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    draw(width){
        this.ctx.beginPath();
        if (this.color == "#ff0000"){
            this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        }else{
            this.ctx.arc(width - this.radio, this.posY, this.radio, 0, 2 * Math.PI);
        }
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    isClickedCuadrado(posicion){
        //funciona solamente con cuadrado
        if ((posicion.x < this.posX + this.radio/2 && posicion.x >= this.posX - this.radio/2)
            && (posicion.y < this.posY + this.radio/2 && posicion.y >= this.posY - this.radio/2)){
                return true;
        }else{
                return false;
        }
    }

    isClickedCirculo(posicion){
        if (Math.sqrt((posicion.x - this.posX)*(posicion.x - this.posX) + (posicion.y - this.posY)*(posicion.y - this.posY)) 
            <= this.radio)
        {
            return true;
        }else{
            return false;
        }
    }
}