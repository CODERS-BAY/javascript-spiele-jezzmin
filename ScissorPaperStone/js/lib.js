function createPopup(errorText, reload = false) {

    let popUp = document.createElement("div");
    popUp.setAttribute("id", "popUp");
    let headLine = document.createElement("h2");
    headLine.append(errorText);

    let button = document.createElement("button");
    if (reload) {
        button.append("Play again");
        button.addEventListener("click", function () {
            document.getElementById("popUp").remove();
            location.reload();
        })
    } else {
        button.append("OK");
        button.addEventListener("click", function () {
            document.getElementById("popUp").remove();
        })
    }

    popUp.append(headLine);
    popUp.append(button);
    document.body.append(popUp);
}