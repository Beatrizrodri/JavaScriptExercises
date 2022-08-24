function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const thirdNumberValue = document.getElementById('third-number').value

  const resultElement = document.getElementById('display')

  if (
    secondNumberValue > firstNumberValue &&
    thirdNumberValue > secondNumberValue
  ) {
    resultElement.textContent = `Modo estrito`
  } else if (thirdNumberValue > secondNumberValue) {
    resultElement.textContent = `Modo suave`
  } else {
    resultElement.textContent = `Indefinido`
  }
}
