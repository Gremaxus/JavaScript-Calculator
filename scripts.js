function buttonOperation() {
  const operation = document.getElementsByClassName("btn-operation");
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
