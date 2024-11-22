
let secim = ["Pablo Burger", "Mary Burger", "Caner Burger"];
let Pablo = ["rare", "overcooked"];
let Mary  = ["rare", "overcooked"];
let Caner = ["rare", "overcooked"];

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
  if (this.value == "Pablo Burger") {
    addToSlct2(Pablo);
  }
  if (this.value == "Mary Burger") {
    addToSlct2(Mary);
  }
  if (this.value == "Caner Burger") {
    addToSlct2(Caner);
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