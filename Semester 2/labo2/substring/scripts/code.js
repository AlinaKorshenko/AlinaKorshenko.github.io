const setup = () => {
let btnSub = document.getElementById('btnSubs');


btnSub.addEventListener('click', substr)


}

const substr = () =>{

    let input1 = document.getElementById('tekst');
    let begin1 = document.getElementById('begin');
    let end1 = document.getElementById('end');
    let txtOutput = document.getElementById("Output");

    let input = input1.value;
    let begin = begin1.value;
    let end = end1.value;


    let output = input.substring(begin, end);


    txtOutput.innerHTML = output;

}
window.addEventListener("load", setup);