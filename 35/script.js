function verifyText() {
  const textElement = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  const requestedCharacters = textElement.toLowerCase().substring(1, 4)

  if (requestedCharacters.includes('b')) {
    resultElement.textContent = 'True'
  } else {
    resultElement.textContent = 'False'
  }
}
