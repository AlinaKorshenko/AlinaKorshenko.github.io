const setup = () => {

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}


const kopieer = () => {

    let pText = document.getElementById("txtInput");
    let input = pText.value;
    let txtOutput = document.getElementById("txtOutput");  // Zoek de <p> waar de tekst moet komen
    txtOutput.innerHTML = input;
}


window.addEventListener("load", setup);