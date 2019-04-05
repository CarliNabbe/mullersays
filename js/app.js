let start = document.getElementById("start");
let audio = document.getElementById("audio");
let sounds = ["./sounds/simonSound1.wav", "./sounds/simonSound2.wav", "./sounds/simonSound3.wav", "./sounds/simonSound4.wav"];
let imagesArray = ["img/green.png", "img/red.png", "img/blue.png", "img/yellow.png"];
let smoothScroll = document.getElementById("smoothScroll");
let startMessage = document.getElementById("startLi");
let simonImage = document.getElementById("simonSays");


start.addEventListener('click', function(){
    // console.log("Click!");
    startGame();

    startMessage.innerHTML = "The game has started!";
    if (startMessage.style.display === "block") {
        startMessage.style.display = 'none';
    }
    else {
        startMessage.style.display = "block";
        simonImage.src = "img/start.png";
        audio.src = sounds[3];
        audio.play();
    }
});

function randomImage() {

    let num = Math.floor(Math.random() * 4); // 0...3
    console.log(num);
    simonImage.src = imagesArray[num];
    audio.src = sounds[num];
    audio.play();
}

function startGame(){
    for(let i=0; i<10; i++) {
        setTimeout(() => {
            randomImage()
        }, 500*(i+1));
    }
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