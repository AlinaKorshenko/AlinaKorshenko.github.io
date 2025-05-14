const setup = () => {

    let catalogElementen = document.getElementsByClassName("catalog");
    let sliders = document.getElementsByClassName("slider")
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", addSwach)



for(let i = 0; i < sliders.length;i++) {
    sliders[i].addEventListener("change", update);
    sliders[i].addEventListener("input", update);
}




update();
}


const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML =red;
    document.getElementById("lblGreen").innerHTML =green;
    document.getElementById("lblBlue").innerHTML =blue;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
}


const addSwach = () => {

    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let divElement = document.createElement("div");

    let catalog = document.getElementById("catalog");


    divElement.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    divElement.classList.add("swatch");
    divElement.setAttribute("class", "swatch");

    catalog.appendChild(divElement);

}








window.addEventListener("load", setup);