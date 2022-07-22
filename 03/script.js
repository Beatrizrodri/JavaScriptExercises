function formatTo2Digits(number) {
  return number.toString().padStart(2, '0')
}

function formatDate(date) {
  return [
    formatTo2Digits(date.getDate()),
    formatTo2Digits(date.getMonth() + 1),

    date.getFullYear()
  ].join('/')
}

console.log(formatDate(new Date()))
