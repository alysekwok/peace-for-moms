const name = "Perinatal Anxiety Screening Results";
const positiveResultMessage = "Your patient is at high risk of presenting an anxiety disorder";
const negativeResultMessage = "Your patient is at low risk of presenting an anxiety disorder";
export const PerinatalAnxietyCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < 31; i++) {
      sum += answers[i];
    }
    if (sum > 26) {
      return [name, sum, positiveResultMessage];
    }
    return [name, sum, negativeResultMessage];
  };