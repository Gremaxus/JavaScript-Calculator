/* Disabling for testing purposes. This might just end up getting refactored out in calculation functions.
function buttonOperation() {
  const operation = getOperand(); // <--- Don't forget to change this later!
  const calculation = document.getElementById("equals"); // Probably should change this to a function and use at the end of this function.
  let nums = buttonNumbers();

  switch (operation) {
    case "+":
      console.log("+");
      return nums + nums;

    case "-":
      console.log("-");
      return nums - nums;

    case "*":
      console.log("*");
      return nums * nums;

    case "/":
      console.log("/");
      return nums / nums;

    case "=":
      console.log("=");
      return nums;

    default:
      return alert(
        "The combination of operations and numbers you have entered is invalid."
      );
  }
}
*/

// Would probably make sense here to use the same function I put in checkOperation().
function buttonNumbers() {
  const ids = ["num-0", "num-1", "num-2", "num-3", "num-4", "num-5", "num-6", "num-7", "num-8", "num-9", "decimal"];

  for (const id of ids) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => displayNumbers(element.innerHTML));
    }
  }

}

function displayNumbers(number) {
  const display = document.getElementById("result-text");
  display.innerHTML += number;

  console.log(number);
  return parseFloat(number, 10); // <-- MOVE THIS TO OPERATIONS/CALCULATIONS TO PREVENT DUPLICATE RETURNS
}

// Need to build a function to get the current length of the number before performing an operation

// Need to build a function that has the buttons for the numbers to send to something like an input field <-- DONE

// Need to build a function that pulls the values from that input field, then manipulate the data from there

buttonNumbers();

// Now, instead of using onclicks for every element, I'm gonna switch to my function dynamically pulling the text from them with event listeners.

// ^ Done kind of?

// Just need to remember to convert the string of numbers to a Number(parseFloat()) <-- DONE