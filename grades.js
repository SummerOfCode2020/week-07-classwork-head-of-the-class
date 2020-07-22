function calculateAverageByAssignment(assignments) {
  let assignmentAverages = []
  let thePriceIsRight = 0
  let tvSynopsis = 0
  let orderBook = 0
  let tddStrictEquality = 0
  let fantasyScoring = 0
  let numberOfStudents = getNumberOfStudents(assignments)

  for (const assignment of assignments) {
    switch (assignment.assignment) {
      case 'The Price is Right':
        thePriceIsRight = thePriceIsRight += assignment.score
        break
      case 'TV Synopsis':
        tvSynopsis = tvSynopsis += assignment.score
        break
      case 'Order Book':
        orderBook = orderBook += assignment.score
        break
      case 'TDD Strict Equality':
        tddStrictEquality = tddStrictEquality += assignment.score
        break
      case 'Fantasy Scoring':
        fantasyScoring = fantasyScoring += assignment.score
        break
      default:
        return 'No assignment match'
    }
  }
  if (assignments.length === 0) {
    return assignmentAverages
  } else {
    assignmentAverages.push({ 'name': 'The Price is Right', 'average': thePriceIsRight / numberOfStudents })
    assignmentAverages.push({ 'name': 'TV Synopsis', 'average': tvSynopsis / numberOfStudents })
    assignmentAverages.push({ 'name': 'Order Book', 'average': orderBook / numberOfStudents })
    assignmentAverages.push({ 'name': 'TDD Strict Equality', 'average': tddStrictEquality / numberOfStudents })
    assignmentAverages.push({ 'name': 'Fantasy Scoring', 'average': fantasyScoring / numberOfStudents })
  }

  return assignmentAverages
}

/* 
Created a getNumberOfStudents function to determine how many unique students are in the assignments array.
This is beneficial in the event the class size changes; the calculateAverageByAssignment will take that into account.
*/
function getNumberOfStudents(assignments) {
  const distinctStudents = assignments.reduce(function studentNames(accumulator, currentAssignment) {
    const { student } = currentAssignment

    if (accumulator[student]) {
      accumulator[student]++
    } else {
      accumulator[student] = 1
    }

    return accumulator
  }, {})

  return Object.keys(distinctStudents).length
}

module.exports = {
  calculateAverageByAssignment
}
