let inputElement = document.getElementById('input-number')

function checkNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1

  if (inputElement.value == randomNumber) {
    console.log('Bom trabalho')
  } else {
    console.log('Não correspondido')
  }
}
