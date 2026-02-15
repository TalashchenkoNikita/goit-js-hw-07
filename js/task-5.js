const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const bodyColorStr = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();

  bodyColorStr.textContent = color;
  body.style.backgroundColor = color;
}); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

