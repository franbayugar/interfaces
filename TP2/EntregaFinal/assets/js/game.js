
const { createApp } = Vue

document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";
    
    
let games = [{
    id: 1,
    name: "Modern Strike",
    category: "Accion",
    img: "modern_strike"
},
{
    id: 2,
    name: "Geometry Dash",
    category: "Clasicos",
    img: "geometry_dash"
    
},
{
    id: 3,
    name: "Slither IO",
    category: "Multijugador",
    img: "slither_io"
},
{
    id:4,
    name: "Brain Test",
    category: "Multijugador",
    img: "brain_test"
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



createApp({
    data: {
        name: selectGame.name,
        category: selectGame.category,
        img: selectGame.img
    },
}).mount('#game')
});