export const depressionCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
        sum += answers[i];
    }; 
    if (sum >= 12) {
        return true;
    } else {
        return false;
    }

};