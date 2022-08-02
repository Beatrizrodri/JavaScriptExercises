function differenceNumber() {
  let number = document.getElementById('input-number').value

  const resultElement = document.getElementById('display')

  if (number <= 19) {
    const result = 19 - number
    resultElement.innerHTML = `A diferença é: ${result}`
  } else {
    const result = (number - 19) * 3

    resultElement.innerHTML = `A diferença é: ${result}`
  }
}
