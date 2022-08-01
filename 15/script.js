function differenceNumber() {
  let number = document.getElementById('input-number').value

  const resultElement = document.getElementById('display')

  if (number <= 13) {
    const result = 13 - number
    resultElement.innerHTML = `A diferença é: ${result}`
  } else {
    const result = (number - 13) * 2

    resultElement.innerHTML = `A diferença é: ${result}`
  }
}
