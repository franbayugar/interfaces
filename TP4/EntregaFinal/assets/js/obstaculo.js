class Obstaculo {
    constructor(div) {
        this.div = div;
    }

    colision1(personaje) {

        if (this.colisionArribaDerecha(personaje)) return true;
        if (this.colisionArribaIzquierda(personaje)) return true;

        return false;
    }

    colision2(personaje) {
        if (this.colisionAereaAbajoIzquierda(personaje)) return true;


        return false;
    }


    colisionAbajoDerecha(personaje) {
        if (this.getLeft() < (personaje.getRight() - 10) && this.getRight() > personaje.getRight() + 10) {
            if (personaje.getBottom() <= this.getTop() + 10) {
                return true;
            }
        }
        return false;
    }

    colisionAbajoIzquierda(personaje) {
        if (this.getLeft() < personaje.getLeft() && this.getRight() > personaje.getLeft()) {
            if (personaje.getBottom() <= this.getTop() + 10) {
                return true;
            }
        }
        return false;
    }

    colisionArribaDerecha(personaje) {
        if (this.getLeft() < personaje.getRight() && this.getRight() > personaje.getRight()) {
            if (personaje.getBottom() >= this.getTop() - 10) {
                return true;
            }
        }
        return false;
    }

    colisionArribaIzquierda(personaje) {
        if (this.getLeft() < personaje.getLeft() && this.getRight() > personaje.getLeft()) {
            if (personaje.getBottom() >= this.getTop()) {
                return true;
            }
        }
        return false;
    }

    colisionAereaAbajoIzquierda(personaje) {
        if (this.getLeft() < personaje.getRight() && this.getRight() > personaje.getLeft()) {
            console.log(personaje.getTop());
            console.log(this.getBottom());
            if (personaje.getTop() <= this.getBottom()) {
                return true;
            }
        }
        return false;
    }

    getLeft() {
        return this.div.getBoundingClientRect().x;
    }

    getRight() {
        return this.div.getBoundingClientRect().x + this.div.getBoundingClientRect().width;
    }

    getBottom() {
        return this.div.getBoundingClientRect().y + this.div.getBoundingClientRect().height;
    }

    getTop() {
        return this.div.getBoundingClientRect().y;
    }
}