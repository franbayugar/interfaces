class Personaje {

    constructor(avatar) {
        this.contenedor = avatar;
        this.estado = 'caminando';
        this.vivo = true;
        this.puntos = 0;
        this.caminar();

    }

    caminar() {
        this.contenedor.classList.add('caminando');
    }

    saltar() {
        this.contenedor.classList.replace('caminando', 'saltando');
        this.contenedor.classList.replace('caminando', 'saltando');
        this.estado = 'saltando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace('saltando', 'caminando');
            this.contenedor.classList.replace('saltando', 'caminando');
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove('caminando');
        this.contenedor.classList.add('saltando');
    }

    deslizar() {
        this.contenedor.classList.replace('caminando', 'deslizando');
        this.contenedor.classList.replace('caminando', 'deslizando');
        this.estado = 'deslizando';
        let interval = setInterval(() => {
            this.contenedor.classList.replace('deslizando', 'caminando');
            this.contenedor.classList.replace('deslizando', 'caminando');
            this.estado = 'caminando';

            clearInterval(interval);
        }, 800);
        this.contenedor.classList.remove('caminando');
        this.contenedor.classList.add('deslizando');
    }

}