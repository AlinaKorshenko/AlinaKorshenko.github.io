const setup = () => {

    document.getElementById("btnCreate")
        .addEventListener("click", create)






}

const create = () => {

    let newP = document.createElement("p");
    let text = document.createTextNode("Paragraaf")
    newP.appendChild(text)
    document.querySelector("div").appendChild(newP);


}

window.addEventListener("load", setup);