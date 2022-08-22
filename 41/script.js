function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const thirdNumberValue = document.getElementById('third-number').value

  const resultElement = document.getElementById('display')

  if (
    firstNumberValue == secondNumberValue &&
    secondNumberValue == thirdNumberValue
  ) {
    resultElement.textContent = `30`
  } else if (
    firstNumberValue == secondNumberValue ||
    secondNumberValue == thirdNumberValue ||
    firstNumberValue == thirdNumberValue
  ) {
    resultElement.textContent = `40`
  } else {
    resultElement.textContent = `20`
  }
}
