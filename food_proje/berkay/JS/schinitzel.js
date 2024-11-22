
let secim = ["Vegan Schinitzel", "Asian of Schinitzel", "Blacksea of Schinitzel"];
let vegan = ["Extra Salat", "Extra Schinitzel"];
let asian = ["With Soy Sauce", "Noodle With Schinitzel"];
let blacksea = ["Fish with Schinitzel", "Extra Corn Flour"];

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
  if (this.value == "Vegan Schinitzel") {
    addToSlct2(vegan);
  }
  if (this.value == "Asian of Schinitzel") {
    addToSlct2(asian);
  }
  if (this.value == "Blacksea of Schinitzel") {
    addToSlct2(blacksea);
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