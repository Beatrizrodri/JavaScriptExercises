function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  const sumResult = Number(firstNumberValue) + Number(secondNumberValue)

  if (sumResult >= 50 && sumResult <= 80) {
    resultElement.textContent = '65'
  } else {
    resultElement.textContent = '80'
  }
}
