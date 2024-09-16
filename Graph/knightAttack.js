const _knightAttack = (n, kr, kc, pr, pc) => {
  const queue = [[kr, kc, 0]];
  const visited = new Set([kr + ',' + kc]);

  while (queue.length > 0) {
    const [ckr, ckc, distance] = queue.shift();

    if (ckr === pr && ckc === pc) return distance;

    const deltas = [[-2, 1], [-1, 2], [2, 1], [1, 2], [2, -1], [1, -2], [-1, -2], [-2, -1]];

    for (let delta of deltas) {
      const [rDelta, cDelta] = delta;
      const neighborR = ckr + rDelta;
      const neighborC = ckc + cDelta;
      const isRInbounds = neighborR >= 0 && neighborR < n;
      const isCInbounds = neighborC >= 0 && neighborC < n;
      const neighborP = neighborR + ',' + neighborC;

      if (isRInbounds && isCInbounds && !visited.has(neighborP)) {
        queue.push([neighborR, neighborC, distance + 1]);
        visited.add(neighborP);
      }
    }
  }

  return null;
};

const knightAttack = (n, kr, kc, pr, pc) => {
  const queue = [[kr, kc, 0]];
  const visited = new Set([kr + ',' + kc]);

  while (queue.length > 0) {
    const [ckr, ckc, distance] = queue.shift();

    if (ckr === pr && ckc === pc) return distance;

    const positions = getPositions(n, ckr, ckc);

    for (let position of positions) {
      const [r, c] = position;
      const newPosition = r + ',' + c;

      if (!visited.has(newPosition)) {
        queue.push([r, c, distance + 1]);
        visited.add(newPosition);
      }
    }
  }

  return null;
};

const getPositions = (n, r, c) => {
  const steps = [
    [r - 2, c + 1],
    [r - 1, c + 2],
    [r + 2, c + 1],
    [r + 1, c + 2],
    [r + 2, c - 1],
    [r + 1, c - 2],
    [r - 1, c - 2],
    [r - 2, c - 1]
  ];
  const positions = [];

  for (let step of steps) {
    const [newRow, newCol] = step;
    if (
      newRow >= 0 &&
      newRow < n &&
      newCol >= 0 &&
      newCol < n
    ) {
      positions.push(step);
    }
  }

  return positions;
}

console.log(knightAttack(8, 1, 1, 2, 2));