function verifyNumbers() {
  const firstNumberElement = document.getElementById('first-number').value

  const secondNumberElement = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  let firstNumberResult

  if (Number(firstNumberElement) < 0) {
    firstNumberResult = 'negativo'
  } else {
    firstNumberResult = 'positivo'
  }

  let secondNumberResult

  if (Number(secondNumberElement) < 0) {
    secondNumberResult = 'negativo'
  } else {
    secondNumberResult = 'positivo'
  }

  resultElement.textContent = `O primeiro número é ${firstNumberResult} e o segundo número é ${secondNumberResult}`
}
