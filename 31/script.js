function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const thirdNumberValue = document.getElementById('third-number').value

  const resultElement = document.getElementById('display')

  resultElement.textContent = `O maior número é ${Math.max(
    firstNumberValue,
    secondNumberValue,
    thirdNumberValue
  )}`
}
