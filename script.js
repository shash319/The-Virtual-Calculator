function clearScreen() {
    document.getElementById("result").value ="";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q; 
}

let Back=()=> {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 } 

// const keyinput = document.getElementById("display-box");
// document.addEventListener('keypress', (e) => {
//     keyinput.value += e.key;
//     console.log(e);
//     if(e.key == "Backspace") {keyinput.value = keyinput.value.pop()}
// })