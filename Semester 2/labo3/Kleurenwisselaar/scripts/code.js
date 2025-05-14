

const setup = () => {


    let btnRed = document.getElementById("btnRed");
    let btnBlue = document.getElementById("btnBlue");
    let btnGreen = document.getElementById("btnGreen");

    btnRed.addEventListener("click", maakRood)
    btnBlue.addEventListener("click", maakBlue)
    btnGreen.addEventListener("click", maakGroen)


}

const maakRood = () =>{

    let roodBlok = document.getElementById("btnRed");
    roodBlok.classList.toggle("red")
}

const maakBlue = () =>{

    let blueBlok = document.getElementById("btnBlue");
    blueBlok.classList.toggle("blue")
}

const maakGroen = () =>{

    const groenBlok = document.getElementById("btnGreen");
    groenBlok.classList.toggle("green")
}




window.addEventListener("load", setup);