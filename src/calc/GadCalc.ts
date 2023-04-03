const name = "GAD-7 Anxiety Screening Results"
const minimalAnxiety = "Your patient has minimal anxiety";
const mildAnxiety = "Your patient has mild anxiety";
const moderateAnxiety = "Your patient has moderate anxiety";
const severeAnxiety = "Your patient has severe anxiety";


export const GadCalc = (answers: number[]) => {
    let sum = 0;
        for (let i = 0; i <= 12; i++) {
            sum += answers[i];
        }
        if (sum >= 0 && sum <=4) {
            return [name, sum, minimalAnxiety];
        } else if (sum >= 5 && sum <=9) {
            return [name, sum, mildAnxiety];
        } else if (sum >= 10 && sum <=14){
            return [name, sum, moderateAnxiety];
        } else if (sum >= 15 && sum <=21){
            return [name, sum, severeAnxiety];
        } else {
            return [name, sum, "No result"]
        }
    };