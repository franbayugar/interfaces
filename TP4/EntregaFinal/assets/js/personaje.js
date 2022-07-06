class Personaje {

    constructor(avatar, caminata, saltando, deslizando) {
        this.contenedor = avatar;
        this.estado = 'caminando';
        this.caminata = caminata;
        this.saltando = saltando;
        this.deslizando = deslizando;
        this.vivo = true;
        this.puntos = 0;
        this.caminar();

    }

    caminar() {
        this.contenedor.classList.add(this.caminata);
    }

    saltar() {
        this.estado = 'saltando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace(this.saltando, this.caminata);
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove(this.caminata);
        this.contenedor.classList.add(this.saltando);
    }

    deslizar() {
        this.estado = 'deslizando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace(this.deslizando, this.caminata);
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove(this.caminata);
        this.contenedor.classList.add(this.deslizando);
    }

    getRight() {
        return this.contenedor.getBoundingClientRect().right;
    }

    getTop() {
        return this.contenedor.getBoundingClientRect().top;
    }

    getLeft() {
        return this.contenedor.getBoundingClientRect().left;
    }

    getBottom() {
        return this.contenedor.getBoundingClientRect().bottom;
    }

}