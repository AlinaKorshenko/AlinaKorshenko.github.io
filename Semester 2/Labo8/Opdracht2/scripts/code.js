const setup = () => {

let json = "{\"naam\":\"John\",\"familienaam\":\"Peeters\",\"gebortedatum\":\"2000-04-30T22:00:00.000Z\",\"fase\":\"1te fase\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"}}"

    let object = JSON.parse(json);

console.log(object.naam);


console.log(JSON.parse(json));

}
window.addEventListener("load", setup);