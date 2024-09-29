let pc = document.getElementById("computer");
let user = document.getElementById("user");
let computerResult = document.getElementById("computerResult");
let userResult = document.getElementById("userResult");

function roll() {
    let compResult = (computerResult.innerText = Math.floor(
        Math.random() * 10 + 1
    ));
    let userSelector = (userResult.innerText = Math.floor(
        Math.random() * 10 + 1
    ));
    if (userSelector > compResult) {
        document.getElementById("userStringResult").innerHTML =
            "<p>Winner ! </p>";
        document.getElementById("computerStringResult").innerHTML = "";
    } else if (compResult > userSelector) {
        document.getElementById("computerStringResult").innerHTML =
            "<p>Winner ! </p>";
        document.getElementById("userStringResult").innerHTML = "";
    }
}
