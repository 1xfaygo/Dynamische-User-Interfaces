lijst = [""];

function getIndexOfElementByName(lijst,naam){
    if (naam in loggedIn);
    return -1
}


function handlelogin(){
    console.log(lijst)
    console.log(Date())

    let naam = document.getElementById('inputNaam').value;// stap 1 ophalen input
    if (naam.length <= 0){
        alert("voer een naam")
        return
    }
    console.log("U hebt op de button geklikt");

    let posittie = getIndexOfElementByName('InputNaam');
    if (posittie > -1){ // stap 2 bepalen of persoon in de array zit
        lijst.splice(lijst.indexOf(naam),1)// stap 3 verwijder persoon uit array
        console.log("uw bent uitgelogd")
        document.getElementById("melding").innerText = "uw bent uitgelogd: " + naam;
        document.getElementById('inputNaam').value = '';
    } else{// niet ingelogd dan toevoegen aan array
        loggedIn.push({"naam": naam , "momment":  new Date()});
        document.getElementById("melding").innerText = "uw bent in gelogd: " + naam;
        console.log("uw bent ingelogd " + naam);
    }
    console.log(loggedIn)
    // console.log("uw bent ingelogd " + naam);
    }

document.getElementById("loginButton").onclick = handlelogin;
