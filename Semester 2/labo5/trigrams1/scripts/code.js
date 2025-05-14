const setup = () => {

    let text = "onoorbaar"
    let output = "";

    for (let i = 0; i < text.length - 2; i++) {

        let triax = text.slice(i, i+3)
        output += triax + "   " ;

    }

    console.log(output)

}
window.addEventListener("load", setup);