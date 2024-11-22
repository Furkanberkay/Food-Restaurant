let secim = ["Mixed", "Mantı with Soup", "Lentil Soup"];
let mix= ["Carrot,Spinach,Pea", "Broccoli,Chickpie,Cream"];
let mantı = ["Sinop Mantı Soup", "Kayseri Mantı Soup"];
let lentil= ["Normal Lentil Oup", "Ezogelin Soup"];

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
  if (this.value == "Mixed") {
    addToSlct2(mix);
  }
  if (this.value == "Mantı with Soup") {
    addToSlct2(mantı);
  }
  if (this.value == "Lentil Soup") {
    addToSlct2(lentil);
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