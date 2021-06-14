let counter = 0;
const conterVal = document.querySelector("#counter-value");
function counterFunction(x) {
  counter += x;
  conterVal.innerHTML = counter;
}
function counterResetFunction() {
  counter = 0;
  conterVal.innerHTML = counter;
}