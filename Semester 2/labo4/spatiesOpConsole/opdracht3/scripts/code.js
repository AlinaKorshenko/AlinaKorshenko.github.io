const setup = () => {

    let button = document.getElementById("btn");

    button.addEventListener("click", spaties)
}


const spaties = () =>{

    let text = document.getElementById("input").value;
    let newtxt = "";
    for (let i = 0; i < text.length; i++) {

        if (text.charAt(i) !== " ") {
            let letter = text.charAt(i) + " ";
            newtxt += letter;
        }
    }
    console.log(newtxt);

}
window.addEventListener("load", setup);