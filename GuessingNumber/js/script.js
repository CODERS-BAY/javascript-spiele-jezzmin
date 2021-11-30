let counter;
let highest = highestNumber.value;
let paragraph = document.createElement("p");
let randomNumber = Math.round(Math.random() * highest);

console.log(randomNumber);

function readCounter() {
    counter = counterInput.value;

    if (counter <= 0) {
        createPopup("You need a number > 0");
    } else if (highest < 5) {
        createPopup("The highest number has to be 10 or higher!");
    } else {
        let activeDiv = document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
    }
}

function guessing() {
    paragraph.innerHTML = '';
    let input = guessingNumber.value;

    if (input == randomNumber) {
        createPopup("You got the correct number: " + randomNumber + " !", true);
        counter = 0;
    } else if (input < randomNumber) {
        paragraph.append("That searched number is higher!");
    } else if (input > randomNumber) {
        paragraph.append("The searched number is lower!");
    }
    counter--;
    output.append(paragraph);

    if (counter == 0) {
        createPopup("You dont get the correct number, it was: " + randomNumber, true);
    }
}