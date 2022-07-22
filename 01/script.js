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

function formatTo2Digits(number) {
  return number.toString().padStart(2, '0')
}

let hours = formatTo2Digits(date.getHours())
let minutes = formatTo2Digits(date.getMinutes())
let seconds = formatTo2Digits(date.getSeconds())

console.log(`Hoje é: ${day[date.getDay()]}`)

console.log(`O horário atual é: ${hours}h : ${minutes} : ${seconds}`)
