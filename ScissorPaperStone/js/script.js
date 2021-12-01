let counter;
let userCounter = 0;
let pcCounter = 0;

function readCounter() {
    counter = counterInput.value;

    if (counter <= 0) {
        createPopup("You need a number > 0");
    } else {
        let activeDiv = document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
    }
}

function play(userChoice) {
    //Math.floor -> abrunde
    //Math.round -> Mathematisches runden
    //Math.ceil -> immer aufrunden
    let pcChoice = Math.ceil(Math.random() * 3);
    //console.log(pcChoice);

    userImage.setAttribute("src", "images/picture" + userChoice + ".jpg");
    pcImage.setAttribute("src", "images/picture" + pcChoice + ".jpg");

    if (userChoice == pcChoice) {
    } else if (userChoice == 1 && pcChoice == 2 || userChoice == 2 && pcChoice == 3 || userChoice == 3 && pcChoice == 1) {
        userCounter++;
    } else {
        pcCounter++;
    }

    counter--;

    if (counter == 0) {
        setTimeout(function () {
            if (userCounter > pcCounter) {
                createPopup("You won", true);
            } else if (userCounter == pcCounter) {
                createPopup("Draw", true);
            } else {
                createPopup("You lose", true);
            }
        }, 1000)
    }
    console.log(counter);
}