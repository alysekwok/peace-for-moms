
interface BirthTraumaCalcResult {
  symptomSubscales: {
    reExperiencingSymptoms: number;
    avoidanceSymptoms: number;
    negativeConditionsAndMood: number;
    hyperarousal: number;
  };
  totalPtsdSymptoms: number;
  dissociativeSymptoms: number;
  birthRelatedPtsdSymptoms: number;
  generalPtsdSymptoms: number;
  diagnosticCriteria: {
    stressorCriterion: boolean;
    reExperiencingSymptoms: boolean;
    avoidanceSymptoms: boolean;
    negativeConditionsAndMood: boolean;
    hyperarousal: boolean;
    duration: boolean;
    distressAndImpairment: boolean;
    exclusionCriteria: boolean;
    ptsdWithDissociativeSymptoms: boolean;
    ptsdWithDelayedOnset: boolean;
  };
}

export function birthTraumaCalc(answers: number[]): BirthTraumaCalcResult {
  return {
    symptomSubscales: {
      reExperiencingSymptoms: scoreReExperiencingSymptoms(answers),
      avoidanceSymptoms: scoreAvoidanceSymptoms(answers),
      negativeConditionsAndMood: scoreNegativeConditionsAndMood(answers),
      hyperarousal: scoreHyperarousal(answers),
    },
    totalPtsdSymptoms: scoreTotalPtsdSymptoms(answers),
    dissociativeSymptoms: scoreDissociativeSymptoms(answers),
    birthRelatedPtsdSymptoms: scoreBirthRelatedPtsdSymptoms(answers),
    generalPtsdSymptoms: scoreGeneralPtsdSymptoms(answers),
    diagnosticCriteria: {
      stressorCriterion: evaluateStressorCriterion(answers),
      reExperiencingSymptoms: evaluateReExperiencingSymptoms(answers),
      avoidanceSymptoms: evaluateAvoidanceSymptoms(answers),
      negativeConditionsAndMood: evaluateNegativeConditionsAndMood(answers),
      hyperarousal: evaluateHyperarousal(answers),
      ptsdWithDissociativeSymptoms: evaluatePtsdWithDissociativeSymptoms(answers),
      duration: evaluateDuration(answers),
      distressAndImpairment: evaluateDistressAndImpairment(answers),
      exclusionCriteria: evaluateExclusionCriteria(answers),
      ptsdWithDelayedOnset: evaluatePtsdWithDelayedOnset(answers),
    },
  };
}

function evaluateStressorCriterion(answers: number[]) {
  return answers[0] == 1 || answers[1] == 1;
}
function scoreReExperiencingSymptoms(answers: number[]) {
  const firstIndex = 2;
  const lastIndex = 6;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}

function evaluateReExperiencingSymptoms(answers: number[]) {
  return scoreReExperiencingSymptoms(answers) >= 1;
}

function scoreAvoidanceSymptoms(answers: number[]) {
  const firstIndex = 7;
  const lastIndex = 8;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluateAvoidanceSymptoms(answers: number[]) {
  return scoreAvoidanceSymptoms(answers) >= 1;
}

function scoreNegativeConditionsAndMood(answers: number[]) {
  const firstIndex = 9;
  const lastIndex = 15;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}

function evaluateNegativeConditionsAndMood(answers: number[]) {
  const firstIndex = 9;
  const lastIndex = 15;
  let count = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (answers[i] > 0) {
      count++;
    }
  }
  return count >= 2;
}
function scoreHyperarousal(answers: number[]) {
  const firstIndex = 16;
  const lastIndex = 21;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluateHyperarousal(answers: number[]) {
  const firstIndex = 16;
  const lastIndex = 21;
  let count = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (answers[i] > 0) {
      count++;
    }
  }
  return count >= 2;
}
function scoreTotalPtsdSymptoms(answers: number[]) {
  const firstIndex = 2;
  const lastIndex = 21;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function scoreDissociativeSymptoms(answers: number[]) {
  const firstIndex = 22;
  const lastIndex = 23;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluatePtsdWithDissociativeSymptoms(answers: number[]) {
  return scoreDissociativeSymptoms(answers) >= 1;
}
function scoreBirthRelatedPtsdSymptoms(answers: number[]) {
  const firstIndex = 2;
  const lastIndex = 11;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function scoreGeneralPtsdSymptoms(answers: number[]) {
  const firstIndex = 12;
  const lastIndex = 21;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluateDuration(answers: number[]){
  return answers[25] >= 1;
}
function evaluateDistressAndImpairment(answers: number[]){
  const sum = answers[26] + answers [27];
  return sum >= 1;
} 
function evaluateExclusionCriteria(answers: number[]){
  return answers[28] >= 1;
}
function evaluatePtsdWithDelayedOnset(answers: number[]) {
  return answers[24] === 2;
}