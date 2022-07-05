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
        this.contenedor.classList.replace(this.caminata, this.saltando);
        this.contenedor.classList.replace(this.caminata, this.saltando);
        this.estado = 'saltando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace(this.saltando, this.caminata);
            this.contenedor.classList.replace(this.saltando, this.caminata);
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove(this.caminata);
        this.contenedor.classList.add(this.saltando);
    }

    deslizar() {
        this.contenedor.classList.replace(this.caminata, this.deslizando);
        this.contenedor.classList.replace(this.caminata, this.deslizando);
        this.estado = 'deslizando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace(this.deslizando, this.caminata);
            this.contenedor.classList.replace(this.deslizando, this.caminata);
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove(this.caminata);
        this.contenedor.classList.add(this.deslizando);
    }

}