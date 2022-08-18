function verifyNumber() {
  const numberValue = document.getElementById('input-number').value

  const resultElement = document.getElementById('display')

  if (numberValue >= 50 && numberValue <= 99) {
    resultElement.textContent = 'True'
  } else {
    resultElement.textContent = 'False'
  }
}
