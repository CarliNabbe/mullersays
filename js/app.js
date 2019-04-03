let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let grey = document.getElementById("grey");

let facts = document.getElementById("factList");

green.addEventListener("click", function(){
    console.log("Click!");
    greenLi.innerHTML = "Simon Says werd als eerste getoond in een nachtclub in 1978";
    if (greenLi.style.display === "block") {
        greenLi.style.display = 'none';
    }
    else {
        greenLi.style.display = "block";
    }
    
    simonSays.src = "img/green.png";
});

red.addEventListener("click", function(){
    console.log("Click!");
    redLi.innerHTML = "Vandaag wordt het spel nog steeds actief gespeeld";
    if (redLi.style.display === "block") {
        redLi.style.display = 'none';
    }
    else {
        redLi.style.display = "block";
    }
    
    simonSays.src = "img/red.png";
});

blue.addEventListener("click", function(){
    console.log("Click!");
    blueLi.innerHTML = "De originele geluiden zijn gebaseerd op de muzikale noten van een bugle";
    if (blueLi.style.display === "block") {
        blueLi.style.display = 'none';
    }
    else {
        blueLi.style.display = "block";
    }
    
    simonSays.src = "img/blue.png";
});

yellow.addEventListener("click", function(){
    console.log("Click!");
    yellowLi.innerHTML = "Simon Says is geinspireerd op de Atari game 'Touch Me'";
    if (yellowLi.style.display === "block") {
        yellowLi.style.display = 'none';
    }
    else {
        yellowLi.style.display = "block";
    }
    
    simonSays.src = "img/yellow.png";
});

start.addEventListener("click", function(){
    console.log("Click!");
    startLi.innerHTML = "The game has started!";
    if (startLi.style.display === "block") {
        startLi.style.display = 'none';
    }
    else {
        startLi.style.display = "block";
    }
    
    simonSays.src = "img/start.png";
});
