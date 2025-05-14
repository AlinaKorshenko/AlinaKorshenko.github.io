const setup = () => {

    let btn = document.getElementById('btnSend')
    btn.addEventListener('click', triagramen)

}


    const triagramen = () => {


    let text = document.getElementById('inputtxt').value
    let output = document.getElementById('output');

    for (let i = 0; i < text.length - 2; i++) {

        let triax = text.slice(i, i + 3)
        output.innerHTML += `<p>${triax}</p>`;

    }




}
window.addEventListener("load", setup);