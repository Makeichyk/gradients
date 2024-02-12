"use strict";

const body = document.querySelector("body");
const nameColors = body.querySelectorAll(".color");
const copyButton = body.querySelector(".copy-btn");
const createButton = body.querySelector(".create-btn");
const tooltip = body.querySelector("#myTooltip");

let copyText = ``;

const createNewColor = () => {
  let str = `rgba(`;
  for (let i = 0; i < 3; i++) {
    str += `${Math.floor(Math.random() * 255)}, `;
  }
  str += `${Math.random().toFixed(2)})`;

  return str;
};

const setBackgroundColor = () => {
  let colors = [createNewColor(), createNewColor()];
  let deg = `${Math.floor(Math.random() * 359)}deg`;

  nameColors[0].textContent = colors[0];
  nameColors[1].textContent = colors[1];

  let res = `linear-gradient(${deg},${colors[0]},${colors[1]})`;
  copyText = res;

  body.style.background = res;
};

function copyStyles() {
  navigator.clipboard.writeText(copyText);
  tooltip.innerHTML = `Copied!`;
}

function outFunc() {
  tooltip.innerHTML = "Copy to clipboard";
}

createButton.addEventListener("click", setBackgroundColor);
copyButton.addEventListener("click", copyStyles);
copyButton.addEventListener("mouseout", outFunc);

setBackgroundColor();
