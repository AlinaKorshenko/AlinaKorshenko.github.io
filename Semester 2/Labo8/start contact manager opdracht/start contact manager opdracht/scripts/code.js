let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht




const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.

    let txtvoornaam = document.getElementById("txtVoornaam").value.trim();
    let txtfamilienaam = document.getElementById("txtFamilienaam").value.trim();
    let txtgeboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
    let txtemail = document.getElementById("txtEmail").value.trim();
    let txtaantalKinderen = document.getElementById("txtAantalKinderen").value.trim();


        // een nieuw aangemaakte persoon voegen we toe

    let persoon={

        voornaam: txtvoornaam,
        familienaam: txtfamilienaam,
        geboortedatum: txtgeboortedatum,
        email: txtemail,
        aantalKinderen: txtaantalKinderen,
    }


        // een bestaande persoon in de lijst passen we aan
    personen.push(persoon);

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    let lijstPersonen = document.getElementById("lstPersonen");
    let nwelement = document.createElement("option");
    nwelement.setAttribute("id", (personen.length-1).toString());
    nwelement.textContent = txtvoornaam + " " + txtfamilienaam;
    lijstPersonen.appendChild(nwelement);

    nwelement.addEventListener("change", klik);

};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    clearAllErrors();
    let verwijedrenLijst = document.getElementsByTagName("option");
    for (let i = verwijedrenLijst.length - 1; i >= 0; i--) {
        verwijedrenLijst[i].remove();
    }

    let txtInvoel = document.querySelectorAll('input[type="text"]');

    for (let i = txtInvoel.length - 1; i >= 0; i--) {

        txtInvoel[i].value = "";

    }

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen").children;
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    for (let i = 0; i<lstPersonen; i++) {
        lstPersonen[i].addEventListener("change", klik);
    }

};

const klik = (event) => {

    let number = Number(event.target.id);
    let persoon ={};

    for(let i=0;i<personen.length;i++) {
        if(i === number){
           persoon = personen[i];
        }
    }

    document.getElementById("txtVoornaam").setAttribute("value" ,persoon.voornaam);
    document.getElementById("txtFamilienaam").setAttribute("value" , persoon.familienaam);
    document.getElementById("txtGeboorteDatum").setAttribute("value" , persoon.geboortedatum);
    document.getElementById("txtEmail").setAttribute("value" , persoon.email);
    document.getElementById("txtAantalKinderen").setAttribute("value" , persoon.aantalKinderen);




}

window.addEventListener("load", setup);