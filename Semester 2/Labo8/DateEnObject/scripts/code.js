const setup = () => {

    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    //dag van de week
    console.log((start.getDay()));

    //maand
    console.log(start.getMonth() +1);

    //jaar
    console.log(start.getFullYear());



    // geen functie om datum mooi te veergeven
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());



    let datum = new Date(2025, 0, 1)
    console.log(datum);




    // houd geen rekening met de plaats en toont globale tijd
    let event = new Date();
    console.log("toString " + event.toISOString());




    console.log("toString " + event.toISOString());

    console










}
window.addEventListener("load", setup);