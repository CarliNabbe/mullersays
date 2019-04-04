let start = document.getElementById("start");
let audio = document.getElementById("audio");
let sounds = ["./sounds/bmo.wav", "./sounds/linux.wav", "./sounds/check.wav", "./sounds/play.wav"];
let imagesArray = ["img/green.png", "img/red.png", "img/blue.png", "img/yellow.png"];
let smoothScroll = document.getElementById("smoothScroll");


start.addEventListener("click", function(){
    console.log("Click!");
    startLi.innerHTML = "The game has started!";
    if (startLi.style.display === "block") {
        startLi.style.display = 'none';
        simonSays.src = "img/simonsays.png";

    }
    else {
        startLi.style.display = "block";
        simonSays.src = "img/start.png";
        // audio.src = sounds[3];
        // audio.play();
    }
    for(let i = 0; i < 10; i++) {
        randomImage();
    }


});

function randomImage() {
    let num = Math.floor(Math.random() * 4); // 0...3
    simonSays.src = imagesArray[num];
    audio.src = sounds[num];
    audio.play();

    // setTimeout(() => {
    //     randomImage()
    // }, 2000);


}

// Function smooth scroll
function smoothy() {
    smoothScroll.addEventListener("click", function () {

        // console.log("yo");
        window.scroll({
            top: 880,
            behavior: 'smooth'
        });
    });
}
smoothy();