function organizeWord() {
  let word = document.getElementById('word-input').value.split('')

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  const textElement = document.querySelector('#display')

  textElement.textContent = word
    .map(letter => {
      const newLetter = alphabet.findIndex(
        alphabetLetter => alphabetLetter === letter
      )
      return alphabet[newLetter + 1]
    })
    .join('')
}
