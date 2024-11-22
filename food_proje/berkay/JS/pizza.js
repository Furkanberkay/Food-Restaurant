
let secim = ["Karışık", "Sucuklu", "Margarita"];
let kaşar= ["Az Kaşarlı", "Extra Kaşarlı"];
let sucuk = ["Az Sucuk", "Extra Sucuk"];
let margarita = ["Az Margarita", "Extra Margarita"];

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
  if (this.value == "Karışık") {
    addToSlct2(kaşar);
  }
  if (this.value == "Sucuklu") {
    addToSlct2(sucuk);
  }
  if (this.value == "Margarita") {
    addToSlct2(margarita);
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