// variable met de prijzen van het drinken
const fris_prijs = 2.0;
const wijn_prijs = 10.0;
const bier_prijs = 4.0;
//lijst om aan toegvoegen
const lijst = {
    fris: 0,
    bier: 0,
    wijn: 0
}
function bestelling(){
while (true){
let drankje = prompt("Welk drankje wilt u toevoegen aan uw bestelling? fris, bier of wijn of type stop om te stoppen met bestellen");

if (drankje == "fris" || drankje == "bier" || drankje == "wijn"){
while(true){
let aantal_drank = parseInt(prompt(" hoveel "+ drankje + " wil je: ?"));
    lijst[drankje] = aantal_drank
    break;
}
}
else if (drankje == "stop"){
    break;
}

else{
    alert("ken ik niet");
}
}
}
bestelling();

totaal= lijst.fris * fris_prijs + lijst.bier * bier_prijs + lijst.wijn * wijn_prijs;

aantal_fris =("aantal Fris:" + lijst.fris);
aantal_bier =("aantal Bier:" + lijst.bier);
aantal_wijn =("aantal Wijn:" + lijst.wijn);
let totaal_prijs = "totaal:" + Math.round(lijst.fris * fris_prijs + lijst.bier * bier_prijs + lijst.wijn * wijn_prijs) + "euro";

document.getElementById("aantal_fris").innerHTML = aantal_fris
document.getElementById("aantal_bier").innerHTML = aantal_bier
document.getElementById("aantal_wijn").innerHTML = aantal_wijn
document.getElementById("totaal_prijs").innerHTML = totaal_prijs