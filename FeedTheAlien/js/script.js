let fallingSpeed = 9.81;
let paragraph = document.createElement('p');
paragraph.style.color = 'white';

function changeFallingSpeed() {
    let choosePlanets = document.getElementsByName("planets")[0].value;
    fallingSpeed = choosePlanets;
    console.log(fallingSpeed);
}

function calculate() {
    paragraph.innerHTML = '';
    let distanceToMonster = Math.round(Math.random() * 90 + 10);
    let speed = document.getElementsByName("speed")[0].value;
    let angle = document.getElementsByName("angle")[0].value;
    let calculateAngel = angle * (Math.PI / 180);

    let throwingDistance = Math.round(((speed * speed) * Math.sin(2 * calculateAngel)) / fallingSpeed);
    console.log(throwingDistance);
    console.log(distanceToMonster);

    if (throwingDistance == distanceToMonster) {
        paragraph.append('That taste excellent');
        paragraph.style.color = 'rgb(153, 255, 0)';
        output.append(paragraph);
    } else {
        let distance = throwingDistance - distanceToMonster;
        paragraph.append('I am hungry the donut is ' + distance + 'm away');
        output.append(paragraph);
    }
}