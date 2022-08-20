function verifyText() {
  const textElement = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (textElement.length >= 3) {
    resultElement.textContent =
      textElement.toLowerCase().substring(0, 3) +
      textElement.substring(3, textElement.length)
  } else {
    resultElement.textContent = textElement
      .toUpperCase()
      .substring(0, textElement.length)
  }
}
