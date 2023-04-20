const name = "Bipolar Screeening Results"
const positiveResultMessage = "You have a positive screen. A positive screen should be followed by a comprehensive medical evaluation for Bipolar Spectrum Disorder."
const negativeResultMessage = "You have a negative screen."
export const BipolarCalc = (answers: number[]) => {
  let sum = 0;
  for (let i = 0; i <= 12; i++) {
    sum += answers[i];
  }
  if (sum >= 7 && answers[13] === 1 && answers[14] >= 2) {
    return [name, sum, positiveResultMessage, 'https://converter.idrsolutions.com/online-converter/output/7bc8053d-7ed0-423d-ab88-5878e11b7fad/bipolar_screen_/index.html?page=1'];
  } else {
    return [name, sum, negativeResultMessage, 'https://converter.idrsolutions.com/online-converter/output/7bc8053d-7ed0-423d-ab88-5878e11b7fad/bipolar_screen_/index.html?page=1'];
  }
};
