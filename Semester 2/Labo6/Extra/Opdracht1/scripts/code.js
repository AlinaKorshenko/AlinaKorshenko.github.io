const setup = () => {

    let par = document.querySelectorAll('p')[0];
   let y = par.childNodes[0];
   par.removeChild(y);
   let newText = document.createTextNode("Good Job!")
    par.appendChild(newText)

}
window.addEventListener("load", setup);