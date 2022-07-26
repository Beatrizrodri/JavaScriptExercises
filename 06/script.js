let yearTextElement = document.getElementById('year')

function leapYearMethod() {
  let year = yearTextElement.value

  if (year % 4 === 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log('O ano é bissexto (tem 366 dias)')
  } else {
    console.log('O ano não é um ano bissexto (tem 365 dias)')
  }
}
