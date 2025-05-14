const setup = () => {

    let lijst = document.getElementById("gemeente");
    let gemeentes = [];
    let inputtxt = null;

    while ("stop".localeCompare(inputtxt) !== 0){

        inputtxt = prompt("Schtijf Gemeentes. als wil niet meer dan schrijf stop");
        gemeentes.push(inputtxt);

    }

    gemeentes.sort()

    for (let i = 0; i < gemeentes.length; i++) {

        lijst.innerHTML+="<option value='"+gemeentes[i]+"'>";
    }
}
window.addEventListener("load", setup);