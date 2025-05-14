const setup = () => {

    let belang = document.getElementsByClassName("belangerijk");

    for (let i = 0; i < belang.length ; i++) {
        belang[i].className += " opvallend";  // spassie ervoor is echt belabgrijk, dan anders zal er belangrijkopvallend zijn

    }

}
window.addEventListener("load", setup);