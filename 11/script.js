function fromCelsiusToFahrenheit() {
  const resultElement = document.getElementById('display-Fahrenheit')

  const celsiusInputElement = document.getElementById('celsius-input').value

  const result = celsiusInputElement * 1.8 + 32

  resultElement.innerHTML = `É igual a: ${result} Fahrenheits`
}

function fromFahrenheitToCelsius() {
  const resultElement = document.getElementById('display-celsius')

  const fahrenheitInputElement =
    document.getElementById('fahrenheit-input').value

  const result = (fahrenheitInputElement - 32) / 1.8

  resultElement.innerHTML = `É igual a: ${result.toFixed(0)} Celsius`
}
