const range_slider = document.getElementById("myRange");
const output = document.getElementById("income_dynamic");
output.innerHTML = myRange.value;

myRange.oninput = function () {
  output.innerHTML = this.value;
};
