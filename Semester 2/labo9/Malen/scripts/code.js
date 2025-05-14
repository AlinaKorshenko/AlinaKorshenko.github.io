let aantalTabelen = 0;


const setup = () => {

    let btnMaak = document.getElementById("btnMaak");

    btnMaak.addEventListener("click", maak)



}


const maak = () =>{

    aantalTabelen++;
    let tabel = document.getElementById("table");
    let rij = document.createElement("tr");
    let kolom = document.createElement("th");

    tabel.id = aantalTabelen;
    let body = document.getElementsByTagName("body");

    body.appendChild(tabel);








}
window.addEventListener("load", setup);