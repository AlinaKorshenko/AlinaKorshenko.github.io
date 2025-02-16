const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover",change);


    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",show);


    /* let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";*/


}


const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value !== "") {

        alert("jouw naam is " + txtName.value);

        console.log("jouw naam is " + txtName.value);
        console.log('jouw naam is + ${txtName.value}');

    }
    else{
        alert("gelive jou naam in te schreven");
    }

}


const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}













window.addEventListener("load", setup);