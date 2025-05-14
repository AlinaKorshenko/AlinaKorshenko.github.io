const setup = () => {

    let btnHerbereken = document.getElementById("btn");

    btnHerbereken.addEventListener("click", herbereken);
}


const herbereken = () =>{

    let prijs1 = parseFloat(document.getElementById("prijs1").innerText.replace(" Eur", ""));
    let prijs2 = parseFloat(document.getElementById("prijs2").innerText.replace(" Eur", ""));
    let prijs3 = parseFloat(document.getElementById("prijs3").innerText.replace(" Eur", ""));



    let aantal1 = parseInt(document.getElementById("aantal1").value, 10);
    let aantal2 = parseInt(document.getElementById("aantal2").value, 10);
    let aantal3 = parseInt(document.getElementById("aantal3").value, 10);


    let BTW3 = parseFloat(document.getElementById("btw3").innerText.replace("%", ""));
    let BTW2 = parseFloat(document.getElementById("btw2").innerText.replace("%", ""));
    let BTW1 = parseFloat(document.getElementById("btw1").innerText.replace("%", ""));



    let subtotal1 = document.getElementById("subtotal1");
    let subtotal2 = document.getElementById("subtotal2");
    let subtotal3 = document.getElementById("subtotal3");



    let total = document.getElementById("total");

    subtotal1.innerHTML= (prijs1 * aantal1 * (1 + BTW1 / 100));
    subtotal2.innerHTML= (prijs2 * aantal2 * (1 + BTW2 / 100));
    subtotal3.innerHTML= (prijs3 * aantal3 * (1 + BTW3 / 100));

    total.innerHTML = parseFloat(subtotal1.innerText) + parseFloat(subtotal2.innerText) + parseFloat(subtotal3.innerText) + " Euro";
}
window.addEventListener("load", setup);