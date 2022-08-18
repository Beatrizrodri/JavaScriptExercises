function verifyText() {
  const textElement = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (textElement.toLowerCase().startsWith('script', 4)) {
    resultElement.textContent =
      textElement.substring(0, 4) +
      textElement.substring(10, textElement.length)
  } else {
    resultElement.textContent = textElement
  }
}
