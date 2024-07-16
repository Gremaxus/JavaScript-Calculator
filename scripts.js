const resultText = document.getElementsByClassName("result-text")[0]; // Pulls the first index of the elements by the class name

// Initializing the variables for the storedValue numbers and the operator to be clicked
let storedValue = null;
let operator = null;

function numberClicked(number) {
  if (number === ".") {
    if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes(".")) // If there is no number, or the textbox shows a decimal is already in place, returns so that there may be no illegal or duplicate decimals
      return;
  }

  resultText.innerHTML += number.toString(); // The textbox appends the numbers clicked but displays them as a string
}

function canOperate() {
  return resultText.innerHTML.length >= 1; // Makes sure there is at least one number before allowing an operation to take place
}

function operate(number) {
  let result; // Declaring result to prepare the variable for the calculation

  // Switch statement to jump straight to the case that matches, in this case, the operator that was clicked
  switch (operator) {
    case "+":
      result = storedValue + number;
      break;

    case "-":
      result = storedValue - number;
      break;

    case "*":
      result = storedValue * number;
      break;

    case "/":
      result = storedValue / number;
      break;
  }

  resultText.innerHTML = result; // The text box of the resultText variable takes the values from result on switch statement
  storedValue = null; // Clears out the storedValue variable
  operator = null; // Clears out the operator variable

}


// Activates when any of the operator buttons are clicked, takes that operation as an argument
function operationClicked(operation) {
  const number = parseFloat(resultText.innerHTML); // Made variable a decimal capable value and puts it in the resultText variable to the result-text html class

  if (!canOperate()) return; // If cannot operate, return

  if (operation === "=" && storedValue !== null) { // If the '=' is clicked and as long as there is a stored value, it will return the operate function to calculate
    return operate(number);
  } else if (operation === "c") { // If the 'c' is clicked, clears the storedValue and the operators
    storedValue = null;
    operator = null;
  } else { // Variable operator is assigned from operation argument
    operator = operation;
    storedValue = number; // storedValue is assigned the value from the number variable declared at the top of function
  }

  resultText.innerHTML = ""; // Once any operation button is clicked, clears JUST the textbox, not the storedValue
}
