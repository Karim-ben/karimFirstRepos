let js = document.getElementById("js");
let space = document.getElementById("space");
let ChangeColor = document.getElementById("change_color");
let blure = document.getElementById("blur");
let img = document.querySelector("img");
let bgr = document.querySelector(".image");
//events
window.onload = () => {
  changecolor();
 changeSpacing()
 changeBlur()
};
ChangeColor.addEventListener("input", () => {
  changecolor();
  console.log(value);
});
space.addEventListener("change", () => {
  changeSpacing()
});
blure.addEventListener("change", () => {
  changeBlur()
});
function changecolor() {
  let value = ChangeColor.value;
  bgr.style.backgroundColor = `${value}`;
  js.style.color = `${value}`;
  changeBgrInpt(value)
}
function changeSpacing() {
  let spaceValue = space.value;
  img.style.margin = `${spaceValue}px`;
}
function changeBlur() {
  let blurValue = blure.value;
  img.style.filter = `blur(${blurValue}px)`;
}
function changeBgrInpt(color){
  blure.style.backgroundImage = `linear-gradient(${color}, ${color})`;
  space.style.backgroundImage = `linear-gradient(${color}, ${color})`;
}
