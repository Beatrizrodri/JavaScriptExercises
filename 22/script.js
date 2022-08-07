function verifyText() {
  const text = document.getElementById('text-input').value
  const position = document.getElementById('position-input').value

  const resultElement = document.getElementById('display')

  if (text.length >= position) {
    const part1 = String(text).substring(0, position - 1)
    const part2 = String(text).substring(position, text.length)

    resultElement.textContent = part1 + part2
  } else {
    resultElement.textContent = text
  }
}
