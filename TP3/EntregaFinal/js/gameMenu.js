var Snows = new Array();
var SnowGraph_g;
var canvas;
var Dwidth = window.innerWidth;
var Dheight = window.innerHeight;


window.onresize = function() {
    Dwidth = window.innerWidth;
    Dheight = window.innerHeight;
};


function initDRW() {
    canvas = document.getElementById('canvasnow');
    canvas.width = Dwidth;
    canvas.height = Dheight;
    SnowGraph_g = canvas.getContext('2d');
    Draw();
}
var gALLi = new Array();
for (i = 1; i < 6; i++) {
    var ie = new Image();
    var ie2 = new Image();
    ie.src = "img/ficha1.png";
    ie2.src = "img/ficha2.png";
    gALLi.push(new Array(ie, ie2));
}

function clear() {
    SnowGraph_g.clearRect(0, 0, Dwidth, Dheight);
}

function Draw() {
    clear();
    if (Snows.length < 300 && Math.floor(Math.random() * 9) > 6) {
        RndPc1 = gALLi[Math.floor(Math.random() * gALLi.length)][0];
        RndPc2 = gALLi[Math.floor(Math.random() * gALLi.length)][1];
        wi = 20 + Math.floor(Math.random() * 80);
        wi2 = 50 + Math.floor(Math.random() * 200);
        Ssnw = new Array(Math.floor(Math.random() * 2000) - 50, -200, RndPc1, wi, Math.random() * 0.1);
        Ssnw2 = new Array(Math.floor(Math.random() * 2000) - 50, -200, RndPc2, wi2, Math.random() * 0.1);
        Snows.push(new Array(Ssnw, Ssnw2));
    }
    for (i = 0; i < Snows.length; i++) {
        Snows[i][0][0] = Snows[i][0][0] - 2 + Math.floor(Math.random() * 4);
        Snows[i][0][1] += Math.floor(Math.random() * 10);
        Snows[i][1][0] = Snows[i][1][0] - 1 + Math.floor(Math.random() * 2);
        Snows[i][1][1] += Math.floor(Math.random() * 6);
        Snows[i][0][4] = Snows[i][0][4] - 0.1 + Math.floor(Math.random() * 0.2);
        SnowGraph_g.drawImage(Snows[i][0][2], 0, 0, 200, 200, Snows[i][0][0], Snows[i][0][1], Snows[i][0][3], Snows[i][0][3]);
        SnowGraph_g.drawImage(Snows[i][1][2], 0, 0, 400, 400, Snows[i][1][0], Snows[i][1][1], Snows[i][1][3], Snows[i][1][3]);
        if (Snows[i][0][1] > 1000 && Snows[i][1][1] > 1000) {
            Snows.splice(i, 1);
        }
    }
    setTimeout("Draw()", 50);
}
setTimeout("initDRW()", 10);