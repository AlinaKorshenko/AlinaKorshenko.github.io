const setup = () => {

    let student = {

        naam: "John",
        familienaam: "Peeters",
        gebortedatum:  new Date(2000, 4, 1),
        fase: "1te fase",
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },

    }

    console.log(JSON.stringify(student));

}
window.addEventListener("load", setup);