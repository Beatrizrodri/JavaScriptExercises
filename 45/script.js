function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const resultElement = document.getElementById('display')

  const sumResult = Number(firstNumberValue) + Number(secondNumberValue)

  const differenceResult = Number(firstNumberValue) - Number(secondNumberValue)

  if (firstNumberValue == 15 || secondNumberValue == 15) {
    resultElement.textContent = `True`
  } else if (sumResult == 15) {
    resultElement.textContent = `True`
  } else if (differenceResult == 15) {
    resultElement.textContent = `True`
  } else {
    resultElement.textContent = `False`
  }
}
