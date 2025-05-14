const setup = () => {

    let p = document.createElement('para');

    console.log(p.nodeName, p.nodeType)

    console.log(p.firstChild.nodeName, p.firstChild.nodeType);

    console.log(p.firstElementChild, p.firstElementChild.nodeType);

    console.log(p.nextElementSibling,);
}
window.addEventListener("load", setup);