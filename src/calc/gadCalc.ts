var minimalAnxiety = false;
var mildAnxiety = false;
var moderateAnxiety = false;
var severeAnxiety = false;
export const gadCalc = (answers: number[]) => {
    let sum = 0;
        for (let i = 0; i <= 12; i++) {
            sum += answers[i];
        }
        if (sum >= 0 && sum <=4) {
            minimalAnxiety = true;
        } else if (sum >= 5 && sum <=9) {
            mildAnxiety = true;
        } else if (sum >= 10 && sum <=14){
            moderateAnxiety = true;
        } else if (sum >= 15 && sum <=21){
            severeAnxiety = true;
        }
    };