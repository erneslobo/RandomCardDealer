/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  createCard(generateSuit(), generateCardNumber());

  let buttonCard = document.querySelector(".buttonCard");
  buttonCard.addEventListener("click", () => {
    createCard(generateSuit(), generateCardNumber());
  });

  window.setInterval(() => {
    createCard(generateSuit(), generateCardNumber());
  }, 10000);

  let card = document.querySelector(".card");
  let cardHeight = document.querySelector(".cardHeight");
  cardHeight.addEventListener("change", e => {
    console.log(card);
    console.log(e.target.value);
    card.style.height = e.target.value + "px";
  });
  let cardWidth = document.querySelector(".cardWidth");
  cardWidth.addEventListener("change", e => {
    card.style.width = e.target.value + "px";
  });
};

let suit = ["♦", "♥", "♠", "♣"];
let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let generateSuit = () => {
  return suit[Math.floor(Math.random() * 4)];
};

let generateCardNumber = () => {
  return cardNumber[Math.floor(Math.random() * 12)];
};

let createCard = (pica, num) => {
  let color = "black";
  if (pica == "♦" || pica == "♥") {
    color = "red";
  } else {
    color = "black";
  }
  let upper = document.querySelector(".upper");
  upper.innerHTML = pica;
  upper.style.color = color;
  let number = document.querySelector(".number");
  number.innerHTML = num;
  let botton = document.querySelector(".botton");
  botton.innerHTML = pica;
  botton.style.color = color;
};
