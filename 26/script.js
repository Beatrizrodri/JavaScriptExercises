function verifyText() {
  const text = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (text.length >= 3) {
    const lastLetters = String(text).substring(text.length - 3, text.length)

    const word = String(text).substring(0, text.length - 3)

    resultElement.textContent = lastLetters + word + lastLetters + lastLetters
  } else {
    resultElement.textContent = text
  }
}
