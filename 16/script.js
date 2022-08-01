let firtNumberElement = document.getElementById('firt-number')

let secondNumberElement = document.getElementById('second-number')

const resultElement = document.getElementById('display')

function sumNumbers() {
  if (firtNumberElement.value == secondNumberElement.value) {
    const result =
      (Number(firtNumberElement.value) + Number(secondNumberElement.value)) * 3

    resultElement.textContent = `O resultado da soma é ${result}`
  } else {
    const result =
      Number(firtNumberElement.value) + Number(secondNumberElement.value)

    resultElement.textContent = `O resultado da soma é ${result}`
  }
}
