// // const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, name1) {
//     const driverName = drivers.filter(function(name) {
//       return name.toLowerCase() === name1.toLowerCase()
//     })
//     return driverName
//     }

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}


//   const driverLetters = drivers.filter(function(name) {
//     return name.includes(letters)
//      })
//      return driverLetters
// }


function fuzzyMatch(drivers, letters) {
 return drivers.filter(driver => driver.indexOf(letters) === 0)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}



