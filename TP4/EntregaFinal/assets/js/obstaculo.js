class Obstaculo {
    constructor(class1, class2) {
        this.class1 = class1;
        this.class2 = class2;


    }


    crearObstaculo() {
        let interval = setInterval(() => {
            let contObs1 = document.createElement("div");
            contObs1.classList.add(this.class1);
            let obs1 = document.createElement("div");
            obs1.classList.add(this.class2);
            contObs1.appendChild(obs1);
            document.getElementById("juego_ejecucion").appendChild(contObs1);



            /* let contObs2 = document.createElement("div");
             contObs2.classList.add("alienSky");
             let obs2 = document.createElement("div");
             obs2.classList.add("alien_fly");
             contObs2.appendChild(obs2);
             document.getElementById("juego_ejecucion").appendChild(contObs2);*/




        }, Math.random() * (5000 - 3000) + 3000);

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
        if (this.getLeft() + 10 < personaje.getRight() && this.getRight() - 10 > personaje.getRight()) {
            if (personaje.getBottom() >= this.getTop() + 10) {
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
            if (personaje.getTop() <= this.getBottom() - 10) {
                return true;
            }
        }
        return false;
    }



    getLeft() { //falta pasar por parametros el div del personaje para que tome las medidas
        return this.obs1.getBoundingClientRect().x;

    }

    getRight() {
        return this.obs1.getBoundingClientRect().x + this.div.getBoundingClientRect().width;
    }

    getBottom() {
        return this.obs1.getBoundingClientRect().y + this.div.getBoundingClientRect().height;
    }

    getTop() {
        return this.obs1.getBoundingClientRect().y;
    }
}