const setup = () => {

let imgPhoto1 = document.getElementById("imgPhoto1")

    imgPhoto1.addEventListener("mouseover", verander)


}

const verander = (img) => {

    let photo = document.getElementById("imgPhoto1");
    photo.src = "image/minder-of-geen-werk-wie-de-extra-tijd-nuttig-wil-besteden-kan.jpg";
    photo.alt = img;


}
window.addEventListener("load", setup);