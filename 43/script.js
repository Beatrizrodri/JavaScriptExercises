function verifyNumber() {
  const firstNumberValue = document.getElementById('first-number').value

  const secondNumberValue = document.getElementById('second-number').value

  const thirdNumberValue = document.getElementById('third-number').value

  const resultElement = document.getElementById('display')

  if (firstNumberValue > 0 && secondNumberValue > 0 && thirdNumberValue > 0) {
    if (
      String(firstNumberValue.slice(-1)) ==
        String(secondNumberValue.slice(-1)) &&
      String(secondNumberValue.slice(-1)) == String(thirdNumberValue.slice(-1))
    ) {
      resultElement.textContent = `O último digito é igual`
    } else if (
      String(firstNumberValue.slice(-1)) ==
        String(secondNumberValue.slice(-1)) ||
      String(secondNumberValue.slice(-1)) ==
        String(thirdNumberValue.slice(-1)) ||
      String(firstNumberValue.slice(-1)) == String(thirdNumberValue.slice(-1))
    ) {
      resultElement.textContent = `O último digito de dois números são iguais`
    } else {
      resultElement.textContent = `O último digito é diferente`
    }
  } else {
    resultElement.textContent = `Algum número não é positivo`
  }
}
