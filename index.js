var timer = 6;
var score = 0;
var hitval = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector("#hitbtn").textContent = hitval;
}


function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runtime() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        } else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;  
            document.querySelector("#res").addEventListener("click", function(){
                restar();
            }) 
            
        }
    }, 1000)
}

function restar() {
    timer = 6;
    runtime();
    makeBubble();
    getNewHit();
}

document.querySelector("#pbtm").addEventListener("click", function (dots) {
    var clicknum = Number(dots.target.textContent);
    if (clicknum === hitval) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
runtime();
makeBubble();
getNewHit();