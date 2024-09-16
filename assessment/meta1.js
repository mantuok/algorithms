const getMaxAdditionalDinersCount =(N, K, M, S)=> {
  const occupiedSeats = new Set(S)
  debugger
  for (let i = 1; i <= N; i ++) {
    if (occupiedSeats.has(i)) {
      i += K;
    } else if (!occupiedSeats.has(i) && !occupiedSeats.has(i + K)) {
      occupiedSeats.add(i);
      i += K;
    } else {
      i += K * 2;
    }
  }
  console.log(occupiedSeats)
  return occupiedSeats.size - M;
}

// console.log(getMaxAdditionalDinersCount(10, 1, 2, [2, 6]))
console.log(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]))

// N = 10
// K = 1
// M = 2
// S = [2, 6]

