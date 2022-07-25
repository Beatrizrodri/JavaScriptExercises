function calculateArea() {
  const side1 = parseInt(document.getElementById('side1').value)

  const side2 = parseInt(document.getElementById('side2').value)

  const side3 = parseInt(document.getElementById('side3').value)

  let s = (side1 + side2 + side3) / 2

  let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))

  document.getElementById('display').innerHTML = area.toFixed(2)
}
