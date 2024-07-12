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

// Would probably make sense here to use the same function I put in checkOperation().
function buttonNumbers() {
  const ids = ["num-0", "num-1", "num-2", "num-3", "num-4", "num-5", "num-6", "num-7", "num-8", "num-9", "decimal"];
  const numbers = {};
  const length = document.getElementByClassName("")

  for (const id of ids) {
    const element = document.getElementById(id);
    numbers[id] = element;
  }

  console.log(parseFloat(numbers));
  return parseFloat(numbers);
}

// This function is probably going to get removed as checkOperation() has turned into a point of replacing this.
function getOperand() {
  const addition = document.getElementById("operation-addition").value;
  const subtraction = document.getElementById("operation-subtraction").value;
  const multiplication = document.getElementById("operation-multiplication").value;
  const division = document.getElementById("operation-division").value;
}

function checkOperation() {
    const ids = ["operation-addition", "operation-subtraction", "operation-multiplication", "operation-division"];
    const operations = {};
    
    for (const id of ids) {
        const element = document.getElementById(id);
        operations[id] = element.value;
    }
    
}

// Need to build a function to get the current length of the number before performing an operation

// Need to build a function that has the buttons for the numbers to send to something like an input field

// Need to build a function that pulls the values from that input field, then manipulate the data from there