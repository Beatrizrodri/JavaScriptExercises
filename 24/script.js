function verifyText() {
  const text = document.getElementById('text-input').value

  const resultElement = document.getElementById('display')

  if (text.length >= 1) {
    const firstLetter = String(text).substring(0, 1)

    const word = String(text).substring(1, text.length - 1)

    resultElement.textContent = firstLetter + firstLetter + word + firstLetter
  } else {
    resultElement.textContent = text
  }
}
