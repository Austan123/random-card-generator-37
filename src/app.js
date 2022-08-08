import "./style.css";

let card_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K", "J", "A"];
let cardValeResults = card_value[Math.floor(Math.random() * card_value.length)];
document.querySelector("#number").innerHTML = cardValeResults;

let icon_value = ["♥", "♦ ", "♣ ", " ♠ "];
let iconValueResults =
  icon_value[Math.floor(Math.random() * icon_value.length)];
document.querySelector("#icons").innerHTML = iconValueResults;
document.querySelector("#iconstwo").innerHTML = iconValueResults;
if (iconValueResults == icon_value[0]) {
  document.querySelector("#icons").style.color = "red";
  document.querySelector("#iconstwo").style.color = "red";
}
