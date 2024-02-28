// alert ("Welcome to the JavaScript calculator")

function add_value(value) {
            document.getElementById("result").value += value;
}

function clear_result() {
            document.getElementById("result").value = " " ;
}

function calculate() {
            let number = document.getElementById("result").value;
            let result = eval(number);
            document.getElementById("result").value = result;
}