function organizeWord() {
  let word = document.getElementById('word-input').value

  const textElement = document.querySelector('#display')

  textElement.textContent = word.split('').reverse().join('')
}
