export const BipolarCalc = (answers: number[]) => {
  let sum = 0;
  for (let i = 0; i <= 12; i++) {
    sum += answers[i];
  }
  if (sum >= 7 && answers[13] === 1 && answers[14] >= 2) {
    return true;
  } else {
    return false;
  }
};
