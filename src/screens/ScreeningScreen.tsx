import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, HStack, Heading, Box, Button, Card } from "native-base";
import { database } from "../firebase/config";
import { get, ref } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

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
  const [remainingNumber, setRemainingNumber] = useState(0);
  const [questions, setQuestions] = useState([]);

  const { navigate, goBack } = useNavigation();

  /***************		FUNCTIONS		***************/

  const handleBack = () => {
    if (remainingNumber === 0) {
      if (questionNumber > 0) {
        // MIGHT GET WEIRD BEHAVIOR HERE
        setRemainingNumber(questions[questionNumber - 1].remaining.length - 1);
        setQuestionNumber(questionNumber - 1);
      } else {
        goBack();
      }
    } else {
      setRemainingNumber(remainingNumber - 1);
    }
  };

  const handleNext = () => {
    if (remainingNumber + 1 >= questions[questionNumber].remaining.length) {
      if (questionNumber + 1 < (questions ? questions.length : 0)) {
        setQuestionNumber(questionNumber + 1);
        setRemainingNumber(0);
      } else {
        //Navigate to next page
      }
    } else {
      setRemainingNumber(remainingNumber + 1);
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
              ? questions[questionNumber].precept +
                questions[questionNumber].remaining[remainingNumber]
              : ""}
          </Text>
          {questions.length > 0 ? (
            questions[questionNumber].answers.map(
              (answer: String, index: number) => (
                <Button
                  borderColor="white"
                  borderWidth="2"
                  key={index}
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

        <HStack paddingTop={2} paddingLeft={1} paddingRight={0} space="160">
          <Button onPress={handleBack}>Back</Button>
          <Button onPress={handleNext}>Next</Button>
        </HStack>
      </VStack>
    </Layout>
  );
};
