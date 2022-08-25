function verifyNumber() {
  const firstNumber = Number(document.getElementById('first-number').value)

  const secondNumber = Number(document.getElementById('second-number').value)

  const resultElement = document.getElementById('display')

  if (
    firstNumber > 0 &&
    secondNumber > 0 &&
    !(
      (firstNumber % 7 == 0 || firstNumber % 11 == 0) &&
      (secondNumber % 7 == 0 || secondNumber % 11 == 0)
    )
  ) {
    if (
      firstNumber % 7 == 0 ||
      firstNumber % 11 == 0 ||
      secondNumber % 7 == 0 ||
      secondNumber % 11 == 0
    ) {
      resultElement.textContent = `True`
    } else {
      resultElement.textContent = `False`
    }
  } else {
    resultElement.textContent = `False`
  }
}
