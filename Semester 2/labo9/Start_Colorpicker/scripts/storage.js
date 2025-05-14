

const storeSliderValues = () => {

    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let rgb = {

        red: red,
        green: green,
        blue: blue,
    }

    //bewaar in local Storage
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.colorpricker.sliders", jsonText);

};

const restoreSliderValues = () => {

    let jsonText = localStorage.getItem("VIVES.be.colorpricker.sliders");
    if(jsonText != null) {

        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;

    }

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten

    let rgbColors = [];
    let swaches = document.getElementsByClassName("swatch");

    for (let i =0; i < swaches.length; i++) {

        let rgb = {


            red: swaches[i].getAttribute("data-red"),
            green: swaches[i].getAttribute("data-green"),
            blue: swaches[i].getAttribute("data-blue"),

        };

        rgbColors.push(rgb);


    }

    //bewaar array in local storage

    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("VIVES.be.colorpicker.swaches", jsonText);
};

const restoreSwatches = () => {

    jsonText = localStorage.getItem("VIVES.be.colorpicker.swaches");
    if(jsonText != null) {

        let rgbColors = JSON.parse(jsonText);
        for(let i=0; i< rgbColors.length; i++){

            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);

        }

    }






};
