const setup = () => {

    let listElementen = document.querySelectorAll('ul> li')
    let bodyElement = document.querySelector('body')

    for (let i = 0; i < listElementen.length; i++) {

        listElementen[i].setAttribute("class" , "listItem")
    }

let imgFoto = document.createElement("img")
    imgFoto.setAttribute("src", "Foto/a-man-is-thinking-something-with-an-empty-bubble-vector.jpg")
    imgFoto.setAttribute("width", "200")
    imgFoto.setAttribute("height", "200")

    bodyElement.appendChild(imgFoto);






}
window.addEventListener("load", setup);