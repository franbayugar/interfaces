class Obstaculo {
    constructor(class1, class2) {
        //recibimos por parametro las clases y llamamos a crear obstaculo
        this.class1 = class1;
        this.class2 = class2;
        this.div;
        this.contenedor;
        this.crearObstaculo();
        this.sumarPuntos("0");

    }


    crearObstaculo() {
        //     let interval = setInterval(() => {
        //asignamos los divs como variables de clase
        this.contenedor = document.createElement("div");
        this.contenedor.classList.add(this.class1);
        this.div = document.createElement("div");
        this.div.classList.add(this.class2);
        this.contenedor.appendChild(this.div);
        document.getElementById("juego_ejecucion").appendChild(this.contenedor);


        /* let contObs2 = document.createElement("div");
         contObs2.classList.add("alienSky");
         let obs2 = document.createElement("div");
         obs2.classList.add("alien_fly");
         contObs2.appendChild(obs2);
         document.getElementById("juego_ejecucion").appendChild(contObs2);*/


        //   }, Math.random() * (5000 - 3000) + 3000);

    }


    colision(personaje) {
        //comprobamos la colision dependiendo cual es el bicho
        if (this.class1 === 'alienFloor') {
            if (this.colisionArribaDerecha(personaje)) return true;
            if (this.colisionArribaIzquierda(personaje)) return true;
        } else {
            if (this.colisionAereaAbajoIzquierda(personaje)) {
                if (this.class1 === 'alienSky') {
                    return true;
                }
                if (this.class1 === 'starPoints') {

                    this.sumarPuntos(1);


                }
            }
        }

        return false;
    }

    sumarPuntos(valor2) {
        let scoreInput = document.getElementById("points");
        let valor1 = scoreInput.value;
        let suma = (parseInt(valor1) + parseInt(valor2));
        scoreInput.value = suma;
        console.log(suma);


    }

    // colision2(personaje) {
    //     if (this.colisionAereaAbajoIzquierda(personaje)) return true;


    //     return false;
    // }


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

            if (personaje.getTop() <= this.getBottom() - 10) {
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
        //eliminamos el bicho del DOM
    eliminar() {
        this.contenedor.remove();
    }
}