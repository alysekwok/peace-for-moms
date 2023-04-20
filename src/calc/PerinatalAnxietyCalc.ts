const name = "Perinatal Anxiety Screening Results";
const positiveResultMessage = "Your patient is at high risk of presenting an anxiety disorder";
const negativeResultMessage = "Your patient is at low risk of presenting an anxiety disorder";
export const PerinatalAnxietyCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < 31; i++) {
      sum += answers[i];
    }
    if (sum > 26) {
      return [name, sum, positiveResultMessage, 'https://converter.idrsolutions.com/online-converter/output/805d99ae-c3d2-4b97-8bad-1b8516af162d/PerinatalAnxietyScreeningScaleand%2520Scoring.docx.pdf/index.html?page=1'];
    }
    return [name, sum, negativeResultMessage, 'https://converter.idrsolutions.com/online-converter/output/805d99ae-c3d2-4b97-8bad-1b8516af162d/PerinatalAnxietyScreeningScaleand%2520Scoring.docx.pdf/index.html?page=1'];
  };