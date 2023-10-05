/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function getRandomCard() {
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomSuit = suits[randomSuitIndex];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.getElementById("top-suit").innerText = randomSuit;
    document.getElementById("card-number").innerText = randomNumber;
    document.getElementById("bottom-suit").innerText = randomSuit;

    if (randomSuit === "♦" || randomSuit === "♥") {
      cardContain.classList.add("red");
    } else {
      cardContain.classList.remove("red");
    }

    return randomSuit + randomSuit + " " + randomNumber;
  }

  const cardContain = document.getElementById("card-contain");
  getRandomCard();

  const refreshButton = document.getElementById("refresh-button");

  refreshButton.addEventListener("click", function() {
    getRandomCard();
  });

  // Temporizador que cambia la carta cada 10 segundos
  setInterval(function() {
    getRandomCard();
  }, 10000);
};
