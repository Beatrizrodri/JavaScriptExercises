function verifyNumber() {
  const resultElement = document.getElementById('display')

  const firstNumberElement = document.getElementById('first-number').value

  const secondNumberElement = document.getElementById('second-number').value

  if (
    firstNumberElement == 50 ||
    secondNumberElement == 50 ||
    Number(firstNumberElement) + Number(secondNumberElement) == 50
  ) {
    resultElement.innerHTML = `True`
  } else {
    resultElement.innerHTML = `False`
  }
}
