//lijst om aan toegvoegen
const lijst = {

}
const prijs = {
    fris: 2,
    bier: 4,
    wijn: 10,
    cola: 3
}
function bestelling() {
    while (true) {
        let drankje = prompt("Welk drankje wilt u toevoegen aan uw bestelling?");

        if (drankje in prijs) {
            while (true) {
                let aantal_drank = parseInt(prompt(" hoveel " + drankje + " wil je: ?"));

                if (drankje in lijst) {
                    lijst[drankje] += aantal_drank;
                } else {
                    lijst[drankje] = aantal_drank;
                }

                break;
            }
        } else if (drankje == "stop") {
            break;
        } else {
            alert("ken ik niet");
        }
    }
}

bestelling();

let totaalbedrag = 0;

for (p in lijst) {
    console.log("prijs: " + prijs[p] + " euro")
    console.log("aantal " + lijst[p])
    totaalbedrag += prijs[p] * lijst[p]
}
console.log(totaalbedrag)
var totaal_prijs = "totaal: " + Math.round(totaalbedrag) + " euro";
document.getElementById("totaal_prijs").innerHTML = totaal_prijs
