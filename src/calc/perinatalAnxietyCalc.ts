export const perinatalAnxietyCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
        sum += answers[i];
    }
    if (sum <= 20) {
        return "Asymptomatic";
    } else if (sum > 20 && sum < 42) {
        return "Mild-moderate symptoms";
    } else {
        return "Severe Symptoms";
    }
};