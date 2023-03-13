export const perinatalAnxietyCalc = (answers: number[]) => {
  let sum = 0;
  for (let i = 0; i < 31; i++) {
    sum += answers[i];
  }
  if (sum >= 26) {
    return true;
  }
  return false;
};
