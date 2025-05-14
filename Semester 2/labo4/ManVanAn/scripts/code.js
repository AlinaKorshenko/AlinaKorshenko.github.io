const setup = () => {

    let tekst = "De man van An geeft geen hand aan ambetante verwanten";

    let aantal = 0;
    let positie = 0;

    while (positie !== -1) {
        aantal++;
        positie = tekst.indexOf("an", positie + 1);
    }



    console.log(aantal);

}
window.addEventListener("load", setup);