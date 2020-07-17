function calculateAverageByStudent(gradesArray) {
  let returnArray = []

  if (gradesArray.length) {
    const allStudents = gradesArray.map(array => array.student)
    const studentUnique = [...new Set(allStudents)]

    studentUnique.forEach(student => {
      let studentObject = {}

      studentObject.name = student
      studentObject.average = getAverage(student, gradesArray, 'student')
      returnArray.push(studentObject)
    })
  }

  return returnArray
}

function getAverage(name, gradesArray, field) {
  let totalScore = 0
  let numberOfGrades = 0

  gradesArray.forEach(grade => {
    if (grade[field] == name) {
      numberOfGrades += 1
      totalScore += grade.score
    }
  })

  return totalScore / numberOfGrades
}

function calculateAverageByAssignment(gradesArray) {
  let returnArray = []

  if (gradesArray.length) {
    const allAssignments = gradesArray.map(array => array.assignment)
    const assignmentsUnique = [...new Set(allAssignments)]

    assignmentsUnique.forEach(assignment => {
      let assignmentObject = {}

      assignmentObject.name = assignment
      assignmentObject.average = getAverage(assignment, gradesArray, 'assignment')
      returnArray.push(assignmentObject)
    })
  }

  return returnArray
}

module.exports = {
  calculateAverageByStudent,
  calculateAverageByAssignment
}
