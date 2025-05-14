let tasks = [];

const setup = () => {

    loadTasks();
    uitdrukenTasks();
    setupEventListeners()




}


const setupEventListeners = () => {
    document.getElementById('btnStart').addEventListener('click', hendleForm);

    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        //Het dragover-event wordt geactiveerd wanneer een gesleept element over een geldig dropgebied beweegt
        //Zonder het dragover-event kunnen we het drop-event niet uitvoeren. Dit is omdat de standaard browseractie voor
        // het dragover-event niet toestaat dat de gebruiker iets daadwerkelijk "dropt".
        //Om de drop-actie toe te staan, moet je e.preventDefault() aanroepen in de dragover-event handler. H
        // ierdoor wordt de standaard browseractie (die het droppen verhindert) voorkomen.
        //Wanneer een gebeurtenis (zoals click, submit, dragover, enz.) plaatsvindt, heeft de browser daar vaak een standaardgedrag aan gekoppeld.
        // Soms wil je dat standaardgedrag overschrijven — dan gebruik je preventDefault().
        col.addEventListener('dragover', e => e.preventDefault());
        col.addEventListener('drop', e => handleDrop(e, status));
    });
};

const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const task = tasks.find(t => t.dateCreate === id);
    if (task) {
        task.status = newStatus;
        saveAndRender();
    }

    uitdrukenTasks();
};

const loadTasks = () => {
    const saved = localStorage.getItem('Vives ToDo');
    if (saved) tasks = JSON.parse(saved);
};



const hendleForm =() =>{

    const title = document.getElementById('txtTitle').value.trim();
    const description = document.getElementById('txtBeschrijving').value.trim();

    const task = {
        title: title,
        description: description,
        dateCreate: new Date().toLocaleString(),
        status: 'todo',

    }

    tasks.push(task);


    saveAndRender();

    uitdrukenTasks();



}


const uitdrukenTasks =() =>{


    kinderenWeg();

    for(let i = 0; i < tasks.length; i++){
        let kaart = createElement("div", "task") ;
        kaart.setAttribute("draggable", "true");
        kaart.setAttribute("id", tasks[i].dateCreate);
        let txttitle = createElement("h1", "title", tasks[i].title );
        let txtDescription = createElement("p", "description", tasks[i].description);
        let txtDate = createElement("p", "date", tasks[i].dateCreate);
        kaart.appendChild(txttitle);
        kaart.appendChild(txtDescription);
        kaart.appendChild(txtDate);

        kaart.addEventListener("dragstart", dragStart);


        let collums = document.getElementsByClassName("column")
        let collum = "";
        for (let j = 0; j < collums.length; j++) {
            if (collums[j].getAttribute("data-status") === tasks[i].status ){

                collum = collums[j];
            }
        }
        collum.appendChild(kaart);
    }
}

const kinderenWeg = () => {

    let collums = document.getElementsByClassName("column")
    for (let i=0; i<collums.length; i++) {
        while (collums[i].firstChild) {
            collums[i].removeChild(collums[i].firstChild);
        }
    }

}

const createElement = (element,  className, text="") =>{

    let e = document.createElement(element);
    e.classList.add(className);
    let txt = document.createTextNode(text);
    e.appendChild(txt);

    return e;
}

const saveAndRender = () => {
    localStorage.setItem("Vives ToDo", JSON.stringify(tasks))

}

const dragStart = (e) =>{
    e.dataTransfer.setData("text/plain", e.target.id);
}



window.addEventListener("load", setup);