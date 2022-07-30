const day = 24 * 60 * 60 * 1000

const currentDay = new Date()
const christmasDay = new Date(currentDay.getFullYear(), 11, 25)

const currentDayMs = currentDay.getTime()
const christmasDayMs = christmasDay.getTime()

const diferenceBetweenDatesInMs = christmasDayMs - currentDayMs

const daysRemaining = Math.round(diferenceBetweenDatesInMs / day)

console.log(`Faltam ${daysRemaining} dias para o natal deste ano.`)
