
document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";
    
    
let games = [{
    id: 1,
    name: "Modern Strike",
    category: "Accion",
    img: "assets/images/juegos/modern_strike.png"
},
{
    id: 2,
    name: "Geometry Dash",
    category: "Clasicos",
    img: "assets/images/juegos/geometry_dash.png"
    
},
{
    id: 3,
    name: "Slither IO",
    category: "Multijugador",
    img: "assets/images/juegos/slither_io.png"
},
{
    id:4,
    name: "Brain Test",
    category: "Multijugador",
    img: "assets/images/juegos/brain_test.png"
},
{
    id:5,
    name: "Basketball Shooter",
    category: "Deportes",
    img: "assets/images/juegos/basketball_shooter.png"
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
        img: selectGame.img
    }
})
});



