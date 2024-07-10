function buttonOperation() {
  const operation = getOperand();
  const calculation = document.getElementById("equals");
  let nums = buttonNumbers();

  switch (operation) {
    case "+":
      console.log("+");
      return nums + nums;
      break;

    case "-":
      console.log("-");
      return nums - nums;
      break;

    case "*":
      console.log("*");
      return nums * nums;
      break;

    case "/":
      console.log("/");
      return nums / nums;
      break;

    case "=":
      console.log("=");
      return nums;
      break;

    default:
      return alert(
        "The combination of operations and numbers you have entered is invalid."
      );
  }
}

function buttonNumbers() {
  const numbers = [];
  const elements = document.getElementById("btn-num").value;

  for (elements of numbers) {
    numbers.push(numbers);
  }

  return numbers;
}

function getOperand() {
  const addition = document.getElementById("operation-addition").value;
  const subtraction = document.getElementById("operation-subtraction").value;
  const multiplication = document.getElementById(
    "operation-multiplication"
  ).value;
  const division = document.getElementById("operation-division").value;
}
