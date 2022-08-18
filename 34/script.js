function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  if (
    firstNumberValue >= 40 &&
    firstNumberValue <= 60 &&
    secondNumberValue >= 40 &&
    secondNumberValue <= 60
  ) {
    if (firstNumberValue > secondNumberValue) {
      resultElement.textContent = `O maior número é ${firstNumberValue}`
    } else {
      resultElement.textContent = `O maior número é ${secondNumberValue}`
    }
  } else {
    resultElement.textContent =
      'Os valores não se encontram no intervalo desejado'
  }
}
