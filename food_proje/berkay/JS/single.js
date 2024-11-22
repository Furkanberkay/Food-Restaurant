
let secim = ["With Parmesan", "Tomato Souce", "With Cream"];
let parmesan = ["Little Parmesan", "Extra Parmesan"];
let souce = ["Little Souce", "Extra Souce"];
let cream = ["Little Cream", "Extra Cream"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

secim.forEach(function addSecim(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function() {
  slct2.innerHTML = "<option></option>";
  if (this.value == "With Parmesan") {
    addToSlct2(parmesan);
  }
  if (this.value == "Tomato Souce") {
    addToSlct2(souce);
  }
  if (this.value == "With Cream") {
    addToSlct2(cream);
  }
}

function addToSlct2(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
  }
)}


