let firstNumberElement = document.getElementById('first-number')
let secondNemberElement = document.getElementById('second-number')
const resultElement = document.getElementById('display')

function multiplyNumbers() {
  const result = firstNumberElement.value * secondNemberElement.value

  resultElement.innerHTML = result
}

function shareNumbers() {
  const result = firstNumberElement.value / secondNemberElement.value

  resultElement.innerHTML = result
}
