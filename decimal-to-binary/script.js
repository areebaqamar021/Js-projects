function convertDecimalToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    const decimalNumber = parseInt(decimalInput, 10);
    if (!isNaN(decimalNumber)) {
        const binaryRepresentation = (decimalNumber >>> 0).toString(2);
        document.getElementById("result").innerText = `Binary representation: ${binaryRepresentation}`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid decimal number.";
    }
}
