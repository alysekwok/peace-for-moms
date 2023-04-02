export const DepressionCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
        sum += answers[i];
    }; 
    if (sum >= 12) {
        // return true;
        return "Mothers scoring above 12 or 13 are likely to be suffering from depression and should seek medical attention.";
    } else {
        return false;
    }
};