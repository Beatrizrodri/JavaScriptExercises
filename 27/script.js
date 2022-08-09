function verifyText() {
  const textValue = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (textValue.toLowerCase().startsWith('java', 0)) {
    resultElement.textContent = 'True'
  } else {
    resultElement.textContent = 'False'
  }
}
