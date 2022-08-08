function verifyNumber() {
  const numberValue = document.getElementById('input-number').value

  const resultElement = document.getElementById('display')

  if (numberValue > 0) {
    if (numberValue % 3 == 0) {
      resultElement.textContent = 'Este número é múltiplo de 3'
    } else if (numberValue % 7 == 0) {
      resultElement.textContent = 'Este número é múltiplo de 7'
    } else {
      resultElement.textContent = 'Este número não é múltiplo nem de 3 nem de 7'
    }
  } else {
    resultElement.textContent = 'Digite um número positivo'
  }
}
