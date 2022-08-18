function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const thirdNumberValue = document.getElementById('third-number').value

  const resultElement = document.getElementById('display')

  if (
    (firstNumberValue >= 50 && firstNumberValue <= 99) ||
    (secondNumberValue >= 50 && secondNumberValue <= 99) ||
    (thirdNumberValue >= 50 && thirdNumberValue <= 99)
  ) {
    resultElement.textContent = 'True'
  } else {
    resultElement.textContent = 'False'
  }
}
