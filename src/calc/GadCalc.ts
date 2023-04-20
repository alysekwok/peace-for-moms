const name = "GAD-7 Anxiety Screening Results"
const minimalAnxiety = "Your patient has minimal anxiety";
const mildAnxiety = "Your patient has mild anxiety";
const moderateAnxiety = "Your patient has moderate anxiety";
const severeAnxiety = "Your patient has severe anxiety";


export const GadCalc = (answers: number[]) => {
    let sum = 0;
        for (let i = 0; i < answers.length; i++) {
            sum += answers[i];
        }
        if (sum >= 0 && sum <=4) {
            return [name, sum, minimalAnxiety, 'https://converter.idrsolutions.com/online-converter/output/255e0a00-abe9-41ca-a426-b2a84cb372d4/GAD-7_Anxiety-updated_0.pdf/index.html?page=1'];
        } else if (sum >= 5 && sum <=9) {
            return [name, sum, mildAnxiety, 'https://converter.idrsolutions.com/online-converter/output/255e0a00-abe9-41ca-a426-b2a84cb372d4/GAD-7_Anxiety-updated_0.pdf/index.html?page=1'];
        } else if (sum >= 10 && sum <=14){
            return [name, sum, moderateAnxiety, 'https://converter.idrsolutions.com/online-converter/output/255e0a00-abe9-41ca-a426-b2a84cb372d4/GAD-7_Anxiety-updated_0.pdf/index.html?page=1'];
        } else if (sum >= 15 && sum <=21){
            return [name, sum, severeAnxiety, 'https://converter.idrsolutions.com/online-converter/output/255e0a00-abe9-41ca-a426-b2a84cb372d4/GAD-7_Anxiety-updated_0.pdf/index.html?page=1'];
        } else {
            return [name, sum, "No result", 'https://converter.idrsolutions.com/online-converter/output/255e0a00-abe9-41ca-a426-b2a84cb372d4/GAD-7_Anxiety-updated_0.pdf/index.html?page=1']
        }
};