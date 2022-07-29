for (let year = 2014; year <= 2050; year++) {
  let firstOfJanuary = new Date(year, 0, 1).getDay()
  if (firstOfJanuary === 0) {
    console.log(`O dia 1º de janeiro de ${year} é um domingo`)
  }
}
