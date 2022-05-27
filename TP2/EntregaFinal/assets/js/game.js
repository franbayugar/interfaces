
document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";
    
    
let games = [{
    id: 1,
    name: "Modern Strike",
    category: "Accion",
    img: "assets/images/juegos/modern_strike.png",
    descripcion: "Modern Strike Online es un 'shooter' multijugador en primera persona, en el que los jugadores se dividirán en dos equipos: terroristas y anti-terroristas. El objetivo, como no podía ser de otra forma, será acabar con tantos miembros del equipo rival como podamos. El que más puntuación obtenga al final de la partida, ganará."
},
{
    id: 2,
    name: "Geometry Dash",
    category: "Clasicos",
    img: "assets/images/juegos/geometry_dash.png",
    descripcion: "Geometry Dash es un juego de plataformas retro, en el que deberemos ir saltando y volando para evitar morir a lo largo de los obstáculos que nos van apareciendo. Todo basado en la música, pues deberemos ir saltando los obstáculos al ritmo de la misma. Podremos personalizar los personajes así como jugar una gran cantidad de niveles. "
},
{
    id: 3,
    name: "Slither IO",
    category: "Multijugador",
    img: "assets/images/juegos/slither_io.png",
    descripcion: "Slither.io es la secuela espiritual de Agar.io . Tu serpiente crece al comerse los pequeños círculos, y si matas a algún rival, podrás comerte toda su masa. ¿Serás capaz de colarte entre los primeros puestos?"
},
{
    id:4,
    name: "Brain Test",
    category: "Multijugador",
    img: "assets/images/juegos/brain_test.png",
    descripcion: "Brain Test es un juego de acertijos gratuito y adictivo. Tiene muchos acertijos divertidos y engañosos que puedes jugar. Desafía tu mente y relájate mientras juegas. Puedes disfrutar de estos acertijos con tu familia y amigos."
},
{
    id:5,
    name: "Basketball Shooter",
    category: "Deportes",
    img: "assets/images/juegos/basketball_shooter.png",
    descripcion: "¿Queres ser el próximo Michael Jordan? Aquí está la oportunidad, hay pelotas esperándote. Basketball Shooter es un juego simple pero muy adictivo que basa en mezclar la realidad deportiva con un entorno de juego maravilloso. No te canses de encestar canastas."
}
]
let url_string = window.location.href; 
let url = new URL(url_string);
let id = url.searchParams.get("id");
let selectGame = null;

for(let elem of games){
    if(elem.id == id){
        selectGame = elem;
    }
}



const game = new Vue({
    el: '#game',
    data: {
        name: selectGame.name,
        category: selectGame.category,
        img: selectGame.img,
        descripcion: selectGame.descripcion
    }
})
});



