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
    resultElement.textContent = 'Os valores se encontram entre 40 e 60'
  } else if (
    firstNumberValue >= 70 &&
    firstNumberValue <= 100 &&
    secondNumberValue >= 70 &&
    secondNumberValue <= 100
  ) {
    resultElement.textContent = 'Os valores se encontram entre 70 e 100'
  } else {
    resultElement.textContent =
      'Os valores não se encontram nos intervalos desejados'
  }
}
