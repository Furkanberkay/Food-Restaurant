let secim = ["Tomato and Avocado", "Spinach and Cheese", "Combo of Egg"];
let tamotavocado= ["2 Avocado-1 Tomato", "1 Avacado-2 Tomato"];
let spinachcheese = ["Spinach and  Dutch Cheese", "Spinach and Swedish Cheese"];
let egg = ["Atom Combo Toast", "Ironing Combo Toast"];

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
  if (this.value == "Tomato and Avocado") {
    addToSlct2(tamotavocado);
  }
  if (this.value == "Spinach and Cheese") {
    addToSlct2(spinachcheese);
  }
  if (this.value == "Combo of Egg") {
    addToSlct2(egg);
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