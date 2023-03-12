export const depressionCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (i === 0 || i === 1 || i === 3) {
            sum += answers[i];
        } else {
            sum += 3 - answers[i]
        }
    }; 
    if (sum >= 12) {
        return true;
    } else {
        return false;
    }

};