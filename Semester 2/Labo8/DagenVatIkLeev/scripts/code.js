const setup = () => {

    let nu = new Date()
    let gebortedatum = new Date(2005, 5, 4)

    let dagInSeconden = 1000 * 60 * 60 * 24
    //eerst krijg ik de miliseconden
    console.log((nu - gebortedatum) / dagInSeconden)
    // ik krijg mijn leeftijd in de dagen



}
window.addEventListener("load", setup);