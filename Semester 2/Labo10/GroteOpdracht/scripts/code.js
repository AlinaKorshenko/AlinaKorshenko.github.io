

const setup = () => {

    loadKarten();

    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", voerComandUit);


}

const loadKarten = () => {

    const saved = JSON.parse(localStorage.getItem('vives.be.history'));
if (saved) {
    for (let i = 0; i < saved.length; i++) {

        voegToeKaart(saved[i].title, saved[i].text, saved[i].url);

    }
}

}




const voerComandUit =() => {

    let txtComandoInput = document.getElementById("zoek");
    let comand = txtComandoInput.value;

    let regex = comand.match("\/[a-z]{1} [a-z]");
    if (regex != null) {


        let commandPrefix = comand.slice(0, 2)


        if(commandPrefix === '/g'){

            google(comand.slice(3))
        }else if(commandPrefix === "/x"){
            x(comand.slice(3))
        }else if(commandPrefix === "/y"){
            youtube(comand.slice(3))
        }else if(commandPrefix === "/i"){
            instagram(comand.slice(3))
        }else{
            alert("Unknown command prefix")
        }
    } else {
        alert("Invalid comand")
    }


}


    const createElementWithClass =(element, className) =>{
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;



    }

    const createCardAppend = (title, comandoSuffix, url)  =>{

    voegToeKaart(title, comandoSuffix, url);

    saveLocalStorage(title, comandoSuffix, url);



    }

    const voegToeKaart = (title, comandoSuffix, url) =>{

        let col4 = createElementWithClass("div", "col-4")
        let card = createElementWithClass("div", title)
        card.classList.add(title.toLowerCase() + "card")
        let cardBody = createElementWithClass("div", "cart-body")
        let cardTitle = createElementWithClass("h5", "card-title")
        cardTitle.appendChild(document.createTextNode(title));
        let cardText = createElementWithClass("p", "card-text")
        cardText.appendChild(document.createTextNode(comandoSuffix));
        let linkGo = createLinkButton(url);
        linkGo.classList.add(title.toLowerCase() + "button");
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(linkGo);
        card.appendChild(cardBody);
        col4.appendChild(card);

        let rijContainer = document.getElementsByClassName("row");
        let container = rijContainer[rijContainer.length - 1];
        if (container.children.length >= 2){
            document.getElementById("resultContainer").appendChild(createElementWithClass("div", "row"))
        }
        container.appendChild(col4);


    }


    const createLinkButton =(url) =>{

    let linkGo = document.createElement("a");

        linkGo.setAttribute("href", url)

        linkGo.setAttribute("target", "_blank")

        linkGo.setAttribute("class", "btn-btn-primary")

        linkGo.appendChild(document.createTextNode("Go!"));

        return linkGo;
    }

    const google = (comandoSyffix) =>{
     let url = "https://www.google.com.br/search?q="+comandoSyffix;
    window.open(url, "_blank");
    createCardAppend("Google", comandoSyffix, url );}


const x = (comandoSyffix) =>{
    let url = "https://x.com/hashtag/"+comandoSyffix;
    window.open(url, "_blank");
    createCardAppend("X", comandoSyffix, url );}


const youtube = (comandoSyffix) =>{
    let url = "https://www.youtube.com/results?search_query="+comandoSyffix;
    window.open(url, "_blank");
    createCardAppend("YouTube", comandoSyffix, url );}


const instagram = (comandoSyffix) =>{
    let url = "https://www.instagram.com/explore/tags/"+comandoSyffix;
    window.open(url, "_blank");
    createCardAppend("Instagram", comandoSyffix, url );}

const saveLocalStorage =(title, comandoSuffix, url) =>{

    let lsHistory = [];
    let historyObject ={

        title : title,
        text : comandoSuffix,
        url : url
    };

    lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if(!lsHistory){

        lsHistory = [];

    }

    lsHistory.push(historyObject);
    localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
}



window.addEventListener("load", setup);