function organizeWord() {
  let word = document.getElementById('word-input').value.split(' ')

  const textElement = document.querySelector('#display')

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1)
  }

  textElement.textContent = word.join(' ')
}
