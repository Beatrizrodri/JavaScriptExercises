function organizeWord() {
  let word = 'w3resource '

  const textElement = document.querySelector('#text')
  textElement.textContent = word

  let separeteWord = word.split('')

  const timeout = setInterval(() => {
    separeteWord.unshift(separeteWord[separeteWord.length - 1])
    separeteWord.pop()

    textElement.textContent = separeteWord.join('')
  }, 200)

  setTimeout(() => {
    clearInterval(timeout)
  }, 5000)
}

organizeWord()
