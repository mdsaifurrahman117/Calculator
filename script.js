// alert ("Welcome to the JavaScript calculator")

let currentInput = '';

function add_value(num) {
            currentInput += num;
            document.getElementById('result').value = currentInput;
            // console.log(currentInput);
}

function add_operator(operator) {
            if (currentInput !== '') {
                        currentInput += operator;
                        document.getElementById('result').value = currentInput;
            }
}

function clear_result() {
            currentInput = '';
            document.getElementById('result').value = ' ';
}

function calculate_result() {
            if (currentInput !== '') {
                        let result = eval(currentInput);
                        document.getElementById('result').value = result;
                        currentInput = result.toString();
            }
}