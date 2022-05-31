document.addEventListener("DOMContentLoaded", ()=>{
    "use strict";

    let games = [];

    getGames();
    async function getGames(){
        let response = await fetch('https://618eb5aa50e24d0017ce13ee.mockapi.io/fran/games');
        if(response.ok){
            games = await response.json();
            procesar();
        }
    }

let url_string = window.location.href; 
let url = new URL(url_string);
let nameSearch = url.searchParams.get("res");
function procesar(){

    let gamesMatch = [];

    for(let elem of gamesMatch){
        if(elem.name.match(`/${nameSearch}.*/`)){
            gamesMatch.push(elem);
        }
    }
    console.log(gamesMatch);



    const games2 = new Vue({
        el: '#games',
        data: {
            listGames: gamesMatch
        }
    })
    }
});

