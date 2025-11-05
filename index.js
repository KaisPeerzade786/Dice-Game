var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
var DiceImage1 = "images/dice" + RandomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", DiceImage1);
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
var DiceImage2 = "images/dice" + RandomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", DiceImage2);

if (RandomNumber1 > RandomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!!🤩";
}
else if (RandomNumber2 > RandomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!!🤩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!🤐";
}