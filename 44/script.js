function verifyIfNumberIsLower(number1, number2, number3) {
  if (number1 < number2 || number1 < number3) {
    return true
  } else {
    return false
  }
}

function verifyNumber() {
  const x = Number(document.getElementById('first-number').value)

  const y = Number(document.getElementById('second-number').value)

  const z = Number(document.getElementById('third-number').value)

  const resultElement = document.getElementById('display')

  if (
    (x >= 20 && verifyIfNumberIsLower(x, y, z)) ||
    (y >= 20 && verifyIfNumberIsLower(y, z, x)) ||
    (z >= 20 && verifyIfNumberIsLower(z, x, y))
  ) {
    resultElement.textContent = `True`
  } else {
    resultElement.textContent = `False`
  }
}
