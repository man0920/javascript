let counter = 0;
const conterVal = document.querySelector("#counter-value");
// Increment Decrement function
function counterFunction(x) {
  counter += x;
  conterVal.innerHTML = counter;
}
// counter reset function
function counterResetFunction() {
  counter = 0;
  conterVal.innerHTML = counter;
}