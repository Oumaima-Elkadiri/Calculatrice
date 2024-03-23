var result = 0;
var i = 0;
var j = 0;

var show = document.getElementById('show');
var affiche = document.getElementById("result");

function limite(){
    show.textContent = show.textContent.substring(Math.max(0, show.textContent.length - 19));
}

function afficher(nbr) {
    if(j == 1){
        ac();
    }
    if (nbr === "." && i === 0 && show.textContent !== "") {
        show.textContent += nbr;
        i = 1;
    } else if (nbr !== ".") {
        show.textContent += nbr;
    }
    limite();
}

function plus() {
    if (show.textContent !== "") {
        show.textContent += " + ";
        i = 0;
    }
}
function moins(){
    if (show.textContent !== "") {
        show.textContent += " - ";
        i = 0;
    }
}
function multiplication(){
    if (show.textContent !== "") {
        show.textContent += " * ";
        i = 0;
    }
}
function division(){
    if (show.textContent !== "") {
        show.textContent += " / ";
        i = 0;
    }
}
function modulo(){
    if(show.textContent !== "") {
        show.textContent += " % ";
        i = 0;
    }
}

function calculate() {
    var table = [];
    var nbr = "";
    var operators = ['+', '-', '*', '/', '%'];

    for (var i = 0; i < show.textContent.length; i++) {
        var char = show.textContent[i];
        if (!isNaN(char) || char === ".") {
            nbr += char;
        }else if (operators.includes(char)) { 
            table.push(parseFloat(nbr));
            nbr = "";
            table.push(char);
        }
    }

    table.push(parseFloat(nbr));

    result = table.shift();
    while (table.length > 0) {
        var operation = table.shift();
        var nbr2 = table.shift();
        if(nbr2==0 && (operation == "/" || operation == "%")){
            result = "Indefine";
            break;
        }
        switch (operation) {
            case "+":
                result += nbr2;
                break;
            case "-":
                result -= nbr2;
                break;
            case "*":
                result *= nbr2;
                break;
            case "/":
                result /= nbr2;
                break;
            case "%":
                result %= nbr2;
        }
    }
    affiche.textContent = result;
}

function egale() {
    calculate(); 
    j = 1;
}
function ac(){
    show.textContent = "";
    affiche.textContent = "";
    result = 0;
    i = 0;
    j = 0;
}
function del(){
    show.textContent = show.textContent.slice(0, -1);
}