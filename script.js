const result = document.getElementById("result");

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    const calculationResult = eval(result.value);
    result.value = calculationResult;
  } catch (error) {
    result.value = "Error";
  }
}
