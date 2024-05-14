function appendToDisplay(value) {
    if (value === 'sin(' || value === 'cos(' || value === 'tan(') {
        // Execute trigonometric functions immediately
        const result = eval(value + '0)');
        document.getElementById('display').value += result;
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
