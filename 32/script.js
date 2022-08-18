function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  const firstNumericalDifference = Math.abs(100 - firstNumberValue)
  const secondNumericalDifference = Math.abs(100 - secondNumberValue)

  if (firstNumericalDifference < secondNumericalDifference) {
    resultElement.textContent = `O número mais próximo de 100 é ${firstNumberValue}`
  } else {
    resultElement.textContent = `O número mais próximo de 100 é: ${secondNumberValue}`
  }
}
