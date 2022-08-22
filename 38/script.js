function schoolGrades() {
  const schoolGradesValue = document.getElementById('input-number').value

  const exam = document.getElementById('exam-grade')

  const resultElement = document.getElementById('display')

  if (exam.checked) {
    resultElement.textContent = result(schoolGradesValue >= 90)
  } else {
    resultElement.textContent = result(
      schoolGradesValue >= 89 && schoolGradesValue <= 100
    )
  }
}

function result(result) {
  if (result) {
    return `O aluno tirou nota A`
  } else {
    return `O aluno não tirou nota A`
  }
}
