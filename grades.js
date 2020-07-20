let mockAssignmentAverages = []
let priceIsRightTotal = 0
let tvTotalScore = 0
let orderbookTotal = 0
let tddTotal = 0
let fantasyTotal = 0


function calculateAverageByAssignment(mockGrades) {
  if (!mockGrades.length) {
    return mockAssignmentAverages
  }
  else {
    mockGrades.forEach(item => {
      switch (item.assignment) {
        case 'The Price is Right':
          priceIsRightTotal = priceIsRightTotal + item.score
          break
        case 'TV Synopsis':
          tvTotalScore = tvTotalScore + item.score
          break
        case 'Order Book':
          orderbookTotal = orderbookTotal + item.score
          break
        case 'TDD Strict Equality':
          tddTotal = tddTotal + item.score
          break
        case 'Fantasy Scoring':
          fantasyTotal = fantasyTotal + item.score
          break
      }
    })

    mockAssignmentAverages.push({ name: 'The Price is Right', average: priceIsRightTotal / 4 })
    mockAssignmentAverages.push({ name: 'TV Synopsis', average: tvTotalScore / 4 })
    mockAssignmentAverages.push({ name: 'Order Book', average: orderbookTotal / 4 })
    mockAssignmentAverages.push({ name: 'TDD Strict Equality', average: tddTotal / 4 })
    mockAssignmentAverages.push({ name: 'Fantasy Scoring', average: fantasyTotal / 4 })

    return mockAssignmentAverages
  }
}

module.exports = calculateAverageByAssignment

// const mockGrades2 = [
//   { assignment: 'The Price is Right', student: 'Shondra', score: 85 },
//   { assignment: 'TV Synopsis', student: 'Evelyn', score: 88 },
//   { assignment: 'Order Book', student: 'Steve', score: 100 },
//   { assignment: 'TDD Strict Equality', student: 'Jamal', score: 98 },
//   { assignment: 'The Price is Right', student: 'Evelyn', score: 89 },
//   { assignment: 'Fantasy Scoring', student: 'Jamal', score: 95 },
//   { assignment: 'TDD Strict Equality', student: 'Steve', score: 87 },
//   { assignment: 'TV Synopsis', student: 'Steve', score: 88 },
//   { assignment: 'Fantasy Scoring', student: 'Shondra', score: 96 },
//   { assignment: 'TDD Strict Equality', student: 'Evelyn', score: 96 },
//   { assignment: 'Fantasy Scoring', student: 'Evelyn', score: 98 },
//   { assignment: 'Order Book', student: 'Shondra', score: 78 },
//   { assignment: 'The Price is Right', student: 'Jamal', score: 96 },
//   { assignment: 'Order Book', student: 'Jamal', score: 100 },
//   { assignment: 'The Price is Right', student: 'Steve', score: 90 },
//   { assignment: 'TV Synopsis', student: 'Shondra', score: 100 },
//   { assignment: 'TDD Strict Equality', student: 'Shondra', score: 92 },
//   { assignment: 'Order Book', student: 'Evelyn', score: 100 },
//   { assignment: 'Fantasy Scoring', student: 'Steve', score: 93 },
//   { assignment: 'TV Synopsis', student: 'Jamal', score: 98 },
// ]

 //const emptyArray = []

// console.log(calculateAverageByAssignment([]))

 //console.log(calculateAverageByAssignment(mockGrades2))
