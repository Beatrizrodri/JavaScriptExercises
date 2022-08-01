function showVariableValue() {
  const variableName = document.getElementById('variable-name').value
  const value = document.getElementById('value').value

  this[variableName] = value

  console.log(
    `O nome digitado para a variável é ${variableName} e o valor é ${this[variableName]}`
  )
}
