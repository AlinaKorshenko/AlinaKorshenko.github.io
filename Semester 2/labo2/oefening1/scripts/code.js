let setup = () => {
    let familie = ["familielid1", "familielid2", "familielid3", "familielid4", "familielid5", "familielid6", "familielid7"];

    console.log(familie.length);

    for (let i = 0; i<familie.length; i=i+2) {

        console.log(familie[i]);
    }
    voegNaamToe(familie); //pass-by-reference, door deze mathode word loc variabele "familie" naar voeg naam toen en krijg een niuwe naam as "leden"
    console.log(familie.join(" - "))

}



     const voegNaamToe = (leden) => {
        let naam = prompt("voeg naam toe");
        leden.push(naam);


        for (let i = 0; i < leden.length; i++) {

            console.log(leden[i]);
        }
     }





window.addEventListener("load", setup);