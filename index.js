//window.alert("This page has not been tested on mobile devices yet, it may be bugged, I'm sorry for the inconvenience")
/*
let btnSound = document.getElementById("random-button");
const audio = new Audio("button-confirmation_C#_major.wav");

btnSound[0].addEventListener("click", (e) => {
    audio.play();
});
*/
function numberGetter() {
    return chosenNumber = document.getElementById("NGGinput").value
}

document.getElementById("NGGsubmit").onclick = function numberGuess(){

    let chosenNumber = numberGetter();

    let random = Math.floor(Math.random() * 10 + 1);

    if (chosenNumber == random) {
        window.prompt("We have a winner!!!")
    }

}
