class Personaje{

    constructor(avatar) {
        this.contenedor = avatar;
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
            let interval = setInterval(() => {
                this.contenedor.classList.replace('saltando', 'caminando');
                this.contenedor.classList.replace('saltando', 'caminando');
                clearInterval(interval);
            }, 800);
            this.contenedor.classList.remove('caminando');
            this.contenedor.classList.add('saltando');
        }

}