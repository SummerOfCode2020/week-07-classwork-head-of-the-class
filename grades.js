/*
## Instructions
In the initial commit to this project, you have been provided with files that contain tests for a `calculateAverageByAssignment()` function. Your task is to implement this function such that it will return a new list of items where each item has the name of the assignment and the class average for that assignment. This exercise will be completed in class.

## Extra Credit
Implement a `calculateAverageByStudent()` function such that it will returns a new list of items where each item has the name of a student and their average across all assignments.
*/

function calculateAverageByAssignment (gradesArr) {
  let assignments = [] // list of objects, { assignment: [ scores ] }
  let returnList = []

  for (let key in gradesArr) {
    const value = gradesArr[key]
    const valueDataType = typeof value
    let assign = ''
    let score = 0

    if (valueDataType === 'object') {
      for (let nestedKey in value) {
        const nestedValue = value[nestedKey]

        if (nestedKey === 'assignment') {
          assign = nestedValue
        } else if (nestedKey === 'score') {
          score = nestedValue
        }
      }
      if (score > 0) {
        addAssignment(assign, score)
      }
    }
  }
  // addAssignment adds assignment and score to assignments list
  // if not in assignments, create new object of assignment with one score in list
  // if already there, add score to list
  function addAssignment(assignment, score) {
    let found = false
    let newItem = {}
    let newList = []

    for (let key in assignments) {
      const value = assignments[key]
      const dataType = typeof value


      if (dataType === 'object') {
        for (let nestedKey in value) {
          if (nestedKey === assignment) {
            found = true
            value[nestedKey].push(score)
          }
        }
      }
    }
    if (!found) {
      newList.push(score)
      newItem[assignment] = newList
      assignments.push(newItem)
    }
  }
  for (let key in assignments) {
    const value = assignments[key]
    const dataType = typeof value
    let retObj = {}
    let sum = 0

    if (dataType === 'object') {

      for (let nestedKey in value) {
        const nestedValue = value[nestedKey]

        nestedValue.forEach(function (score) {
          sum += score
        })
        retObj['name'] = nestedKey
        retObj['average'] = sum / nestedValue.length
        returnList.push(retObj)
      }
    }
  }

  return returnList
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
function calculateAverageByStudent (gradesArr) {
  let students = [] // list of objects, { assignment: [ scores ] }
  let returnList = []

  for (let key in gradesArr) {
    const value = gradesArr[key]
    const valueDataType = typeof value
    let student = ''
    let score = 0

    if (valueDataType === 'object') {
      for (let nestedKey in value) {
        const nestedValue = value[nestedKey]

        if (nestedKey === 'student') {
          student = nestedValue
        } else if (nestedKey === 'score') {
          score = nestedValue
        }
      }
      if (score > 0) {
        addStudent(student, score)
      }
    }
  }
  // addStudent adds student and score to students list
  // if not in students, create new object of student with one score in list
  // if already there, add score to list
  function addStudent(student, score) {
    let found = false
    let newItem = {}
    let newList = []

    for (let key in students) {
      const value = students[key]
      const dataType = typeof value


      if (dataType === 'object') {
        for (let nestedKey in value) {
          if (nestedKey === student) {
            found = true
            value[nestedKey].push(score)
          }
        }
      }
    }
    if (!found) {
      newList.push(score)
      newItem[student] = newList
      students.push(newItem)
    }
  }
  for (let key in students) {
    const value = students[key]
    const dataType = typeof value
    let retObj = {}
    let sum = 0

    if (dataType === 'object') {

      for (let nestedKey in value) {
        const nestedValue = value[nestedKey]

        nestedValue.forEach(function (score) {
          sum += score
        })
        retObj['name'] = nestedKey
        retObj['average'] = sum / nestedValue.length
        returnList.push(retObj)
      }
    }
  }
  return returnList
}

module.exports = { calculateAverageByAssignment, calculateAverageByStudent }
