let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let grey = document.getElementById("grey");

let facts = document.getElementById("factList");

green.addEventListener("click", function(){
    console.log("Click!");
    greenLi.innerHTML = "ClickGreen";
    if (greenLi.style.display === "block") {
        greenLi.style.display = 'none';
    }
    else {
        greenLi.style.display = "block";
    }
});

red.addEventListener("click", function(){
    console.log("Click!");
    redLi.innerHTML = "ClickRed";
    if (redLi.style.display === "block") {
        redLi.style.display = 'none';
    }
    else {
        redLi.style.display = "block";
    }
});

blue.addEventListener("click", function(){
    console.log("Click!");
    blueLi.innerHTML = "ClickBlue";
    if (blueLi.style.display === "block") {
        blueLi.style.display = 'none';
    }
    else {
        blueLi.style.display = "block";
    }
});

yellow.addEventListener("click", function(){
    console.log("Click!");
    yellowLi.innerHTML = "ClickYellow";
    if (yellowLi.style.display === "block") {
        yellowLi.style.display = 'none';
    }
    else {
        yellowLi.style.display = "block";
    }
});

start.addEventListener("click", function(){
    console.log("Click!");
    startLi.innerHTML = "ClickStart";
    if (startLi.style.display === "block") {
        startLi.style.display = 'none';
    }
    else {
        startLi.style.display = "block";
    }
});
