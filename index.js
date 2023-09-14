//window.alert("This page has not been tested on mobile devices yet, it may be bugged, I'm sorry for the inconvenience")
/*
let btnSound = document.getElementById("random-button");
const audio = new Audio("button-confirmation_C#_major.wav");

btnSound[0].addEventListener("click", (e) => {
    audio.play();
});
*/
let chosenNumber;

document.getElementById("NGGsubmit").onclick = function (chosenNumber) {
    chosenNumber = document.getElementById("NGGinput").value;
    guesses+=1;

    let number = Math.floor(Math.random() * 10 + 1);
    document.getElementById("NGGdisplay").innerHTML = number;


    if (document.getElementById("NGGinput").onchange == true) {
        document.getElementById("NGGdisplay").innerHTML = "What a cheater 🙄";
    }  
    if (chosenNumber == number) {
        window.alert("✨ We have a winner!!! ✨");
    }
    
}
