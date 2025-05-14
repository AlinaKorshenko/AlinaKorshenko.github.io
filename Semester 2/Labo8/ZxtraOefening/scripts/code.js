const setup = () => {

    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);

}


const toonEvenementInfo = (evenement) => {

    console.log("Evenement: " + evenement.naam);
    console.log("Datum: " + evenement.datum. toString());
    console.log("Locatie: " + evenement.locatie);
    console.log("Deelnemers: " + evenement.deelnemers.join(", "));

    console.log("Aantal dagen tot het evenement: " + DagenTotEvenement(evenement));

}

const DagenTotEvenement = (evenement) =>{

    let dagInSeconden = 1000 * 60 * 60 * 24
    let nu = new Date()
    return Math.ceil((evenement.datum - nu )/dagInSeconden);

 }


window.addEventListener("load", setup);