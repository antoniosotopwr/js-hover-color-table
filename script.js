"use strict";

const div1 = document.querySelector(".div-1");

div1.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "salmon";
  console.log("over");
});

div1.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "blue";
    console.log("leave");
  });

