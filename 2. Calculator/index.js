let num1 = parseFloat(document.getElementById("num1-el").value)
let num2 = parseFloat(document.getElementById("num2-el").value)

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    console.log(num1)
    console.log(num2)
    let result = num1 + num2
    console.log(result)
    sumEl.textContent = "Addition: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Subtract: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Divide: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Multiplication: " + result
}

