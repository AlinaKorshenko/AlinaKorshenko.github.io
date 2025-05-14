const setup = () => {

    let eiStaat = document.getElementsByName('lijstKip');
    let huidigeStaat = null;
    let output = null;
    let txtOutput = document.getElementById('note');
    let txtLeter = document.getElementById('leter').value


    for (let i = 0; i < eiStaat.length; i++) {

        if (eiStaat[i].checked) {
            huidigeStaat = eiStaat[i].value;
        }
    }

    if("Met een ei".lokaleCompare(huidigeStaat)){

        output = "Hierbiven een kip met een ei";

    }else if("Zonder een ei".lokaleCompare(huidigeStaat)){

        output= "Hierbiven een kip zonder een ei";

    }else{

        output= "";
    }

    txtOutput.innerHTML = output;

    let aantal = 0;
    let positie = 0;

    while (positie !== -1) {
        aantal++;
        positie = txtOutput.indexOf(txtLeter, positie + 1);
    }






}
window.addEventListener("load", setup);