function verifyNumber() {
  const minimumNumber = Number(document.getElementById('minimum-number').value)

  const maximumNumber = Number(document.getElementById('maximum-number').value)

  const number = Number(document.getElementById('number').value)

  const resultElement = document.getElementById('display')

  if (number >= 40 && number <= 10000) {
    if (number >= minimumNumber && number <= maximumNumber) {
      resultElement.textContent = `True`
    } else {
      resultElement.textContent = `False`
    }
  } else {
    resultElement.textContent = `False`
  }
}
