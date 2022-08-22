function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  const sumResult = Number(firstNumberValue) + Number(secondNumberValue)

  const differenceResult = Number(firstNumberValue) - Number(secondNumberValue)

  if (firstNumberValue == 8 || secondNumberValue == 8) {
    resultElement.textContent = `True`
  } else if (sumResult == 8) {
    resultElement.textContent = `True`
  } else if (differenceResult == 8) {
    resultElement.textContent = `True`
  } else {
    resultElement.textContent = `False`
  }
}
