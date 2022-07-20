// Escreva um programa JavaScript para exibir o dia e a hora atuais no seguinte formato:

// Today is : Tuesday.
// O horário atual é : 22h : 30 : 38
const date = new Date()

const day = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

function standardizeNumbers(number) {
  return number >= 0 && number <= 9 ? `0${number}` : number
}

let hours = standardizeNumbers(date.getHours())
let minutes = standardizeNumbers(date.getMinutes())
let seconds = standardizeNumbers(date.getSeconds())

console.log(`Hoje é: ${day[date.getDay()]}`)

console.log(`O horário atual é: ${hours}h : ${minutes} : ${seconds}`)
