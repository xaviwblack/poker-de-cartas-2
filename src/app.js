/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let listNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let listIcon = ["♦", "♥", "♠", "♣"];
let palo2 = document.querySelector("#palo2");
let num = document.querySelector("#numeros");
let icon = document.querySelector("#palo");

window.onload = function() {
  //write your code here
  let valorN = listNum[[Math.floor(Math.random() * listNum.length)]];
  console.log(valorN);

  num.innerHTML = valorN;

  let valorI = listIcon[Math.floor(Math.random() * listIcon.length)];
  if (valorI == "♦" || valorI == "♥") {
    icon.style.color = "red";
    palo2.style.color = "red";
    num.style.color = "red";
  }
  console.log(valorI);
  icon.innerHTML = valorI;

  palo2.innerHTML = icon.innerHTML;
};
