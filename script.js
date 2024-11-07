function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function appendFunction(func) {
    document.getElementById('display').value += func;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/sin\(/g, 'Math.sin(')
                               .replace(/cos\(/g, 'Math.cos(')
                               .replace(/tan\(/g, 'Math.tan(');
        document.getElementById('display').value = eval(expression);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
