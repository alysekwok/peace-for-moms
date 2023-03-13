import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, HStack, Button, Card } from "native-base";
import { database } from "../firebase/config";
import { get, ref } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { BipolarCalc } from "../calc/BipolarCalc";
import { birthTraumaCalc } from "../calc/birthTraumaCalc";
import { perinatalAnxietyCalc } from "../calc/perinatalAnxietyCalc";
import { gadCalc } from "../calc/gadCalc";
import { depressionCalc } from "../calc/depressionCalc";

export type ScreeningScreenProps = {
  screeningType: String;
};

export type Question = {
  answers: String[];
  precept: String;
  remaining: String[];
};

export const ScreeningScreen = ({ route }) => {
  /***************		HOOKS		***************/

  const { screeningType } = route.params;
  const questionsReference = ref(
    database,
    `screening_tools/${screeningType}/questions`
  );

  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);

  const { navigate, goBack } = useNavigation();

  /***************		FUNCTIONS		***************/

  const handleBack = () => {
    if (questionNumber === 0) {
      goBack();
    } else {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const handleNext = () => {
    if (answerArray.length > questionNumber) {
      if (questionNumber + 1 < (questions ? questions.length : 0)) {
        setQuestionNumber(questionNumber + 1);
      } else {
        //Navigate to next page
      }
    }
  };

  const handleAnswer = (index) => {
    const newAnswerArray = [
      ...answerArray.slice(0, questionNumber),
      index,
      ...answerArray.slice(questionNumber + 1),
    ];
    setAnswerArray(newAnswerArray);
    console.log(newAnswerArray);
  };

  const calculate = (answerArray) => {
    switch (screeningType) {
      case "bipolar":
        return BipolarCalc(answerArray);
      case "depression":
        return depressionCalc(answerArray);
      case "birth_trauma":
        return birthTraumaCalc(answerArray);
      case "GAD_anxiety":
        return gadCalc(answerArray);
      case "perinatal_anxiety":
        return perinatalAnxietyCalc(answerArray);
      default:
        return BipolarCalc(answerArray);
    }
  };

  /***************		EFFECTS		***************/

  if (questions.length === 0) {
    get(questionsReference).then((snapshot) => {
      if (snapshot.exists()) {
        setQuestions(snapshot.val());
      }
    });
  }

  /***************		JSX		***************/

  return (
    <Layout>
      <VStack
        space={5}
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack flex={1} alignItems="center" space={5}>
          <Card bg="yellow.100" alignItems="center" borderRadius={30}>
            <Text textAlign="center" variant="blurb">
              Please check the answer that is right for you:
            </Text>
          </Card>
          <Card
            alignSelf="stretch"
            alignItems="center"
            bg="primary.400"
            borderRadius={30}
          >
            <Text bold variant="contrastSubHeading">
              {questions.length > 0
                ? questions[questionNumber].question_number +
                  ". " +
                  questions[questionNumber].question
                : ""}
            </Text>
            {questions.length > 0 ? (
              questions[questionNumber].answers.map(
                (answer: String, index: number) => (
                  <Button
                    borderColor="white"
                    borderWidth="2"
                    key={index}
                    isPressed={answerArray[questionNumber] === index}
                    onPress={() => {
                      handleAnswer(index);
                    }}
                    alignSelf="stretch"
                    marginY={3}
                  >
                    <Text textAlign="center" color="white">
                      {answer}
                    </Text>
                  </Button>
                )
              )
            ) : (
              <Button
                textAlign="center"
                borderColor="white"
                borderWidth="2"
                marginTop={5}
                height="55"
                width="180"
              />
            )}
          </Card>
        </VStack>
        <HStack space={5} justifyContent="space-evenly">
          <Button flex={1} paddingY={5} onPress={handleBack}>
            Back
          </Button>
          <Button flex={1} onPress={handleNext}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Layout>
  );
};
