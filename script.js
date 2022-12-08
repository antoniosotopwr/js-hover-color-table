"use strict";

const div1 = document.querySelector(".div-1");

div1.addEventListener("mouseover", (e) => {
  let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "F",
  ];
  let randomColor = "";
  let randomNumber;

  for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 15);
    randomColor += hexNumbers[randomNumber];
  }
  console.log(randomColor);

  e.target.style.backgroundColor = "#" + randomColor;
});

// div1.addEventListener("mouseleave", (e) => {
//   e.target.style.backgroundColor = "gray";
// });
