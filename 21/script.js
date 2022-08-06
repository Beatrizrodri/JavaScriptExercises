function verifyText() {
  const textElement = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (textElement.toLowerCase().startsWith('py', 0)) {
    resultElement.textContent = textElement
  } else {
    resultElement.textContent = `Py${textElement}`
  }
}
