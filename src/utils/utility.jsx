export function findWinner(boxes) {
  const rows = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c, d] = rows[i];
    if (
      boxes[a] &&
      boxes[a] === boxes[b] &&
      boxes[a] === boxes[c] &&
      boxes[a] === boxes[d]
    ) {
      return boxes[a];
    }
  }
  return null;
}
export function areAllBoxesClicked(boxes) {
  let count = 0;
  boxes.forEach((item) => {
    if (item !== null) {
      count++;
    }
  });
  if (count === 16) {
    return true;
  } else {
    return false;
  }
}
