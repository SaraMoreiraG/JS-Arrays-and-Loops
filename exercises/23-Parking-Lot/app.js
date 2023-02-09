let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking_state){
  var countAvailableSlots = 0;
  var countOccupiedSlots = 0;
  for (let i = 0; i < parking_state.length; i++){
    for (let j = 0; j < parking_state[i].length; j++){
      if (parking_state[i][j] == 1)
        countOccupiedSlots += 1;
      else if (parking_state[i][j] == 2)
        countAvailableSlots += 1;
    }
  }
  var countTotalSlots = countAvailableSlots + countOccupiedSlots;
  const state = {
    totalSlots : countTotalSlots,
    availableSlots : countAvailableSlots,
    occupiedSlots : countOccupiedSlots,
  }
  return state;
}

console.log(getParkingLotState(parking_state))