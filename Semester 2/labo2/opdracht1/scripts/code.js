const setup = () => {

    window.alert("Dit is een mededeling"); // een madedeling met een knoop OK
    window.confirm("Weet u het zeker?"); // mededeling men OK en ANULEREN
    window.prompt("Wat is uw naam", "onbekend"); // een mededeling men een invoer opdracht
}
window.addEventListener("load", setup);