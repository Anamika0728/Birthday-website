const PASSWORD = "udaipur";

const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("password-button");
const passwordError = document.getElementById("password-error");

const birthdayScreen = document.getElementById("birthday-screen");

const flame = document.getElementById("flame");
const swipeInstruction = document.getElementById("swipe-instruction");
const afterCandle = document.getElementById("after-candle");

const continueButton = document.getElementById("continue-button");
const mainContent = document.getElementById("main-content");


/* PASSWORD */

passwordButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {

    if (passwordInput.value === PASSWORD) {

        passwordScreen.classList.add("hidden");
        birthdayScreen.classList.remove("hidden");

    } else {

        passwordError.textContent = "Nope. Try again :)";
        passwordInput.value = "";

    }
}


/* CANDLE */

let startX = 0;
let startY = 0;
let isDragging = false;


/*
   For now, we detect the swipe anywhere.
   This is deliberately simple and reliable.
*/

document.addEventListener("pointerdown", function(event) {

    if (birthdayScreen.classList.contains("hidden")) {
        return;
    }

    startX = event.clientX;
    startY = event.clientY;

    isDragging = true;
});


document.addEventListener("pointerup", function(event) {

    if (!isDragging) {
        return;
    }

    const endX = event.clientX;
    const endY = event.clientY;

    const distanceX = endX - startX;
    const distanceY = Math.abs(endY - startY);

    if (distanceX > 50 && distanceY < 100) {
        blowOutCandle();
    }

    isDragging = false;
});


function blowOutCandle() {

    flame.classList.add("flame-out");

    swipeInstruction.classList.add("hidden");

    setTimeout(function() {
        afterCandle.classList.remove("hidden");
    }, 500);
}


/* CONTINUE */

continueButton.addEventListener("click", function() {

    birthdayScreen.classList.add("hidden");

    mainContent.classList.remove("hidden");

    window.scrollTo(0, 0);

});