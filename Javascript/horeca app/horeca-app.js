// variable met de prijzen van het drinken
const fris = 3.0;
const wijn = 7.0;
const bier = 4.0;
//lijst om aan toegvoegen
const lijst = []
let aantal = 0
// functie om drankje het te toevoegen
function myFunction() {
if (option.value =="fris"){
document.getElementById("fris").innerHTML = "Fris : " + fris + " euro";
lijst.push({ name: "Fris", price: fris });
    }
if (option.value =="wijn"){
    document.getElementById("fris").innerHTML = "Wijn : " + wijn + " euro";
    }
}