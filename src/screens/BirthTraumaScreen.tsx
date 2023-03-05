import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, HStack, Heading, Box, Button } from "native-base";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/config";

export const BirthTraumaScreen = () => {
  const [questionList, setQuestionList] = useState([]);
  // console.log("questionList: ", questionList);
  useEffect(() => {
    const currentTasksRef = ref(
      database,
      "screening_tools/birth_trauma/questions"
    );
    const unsubscribe = onValue(currentTasksRef, (snapshot) => {
      const data = snapshot.val();
      // update state
      setQuestionList(data);
    });
    // clean up our listeners
    return unsubscribe;
  }, []);

  if (questionList.length === 0) {
    return (
      <Layout>
        <Text textAlign="center" variant="blurb">
          Loading...
        </Text>
      </Layout>
    );
  }

  return <BirthTraumaContent questionList={questionList} />;
};

const BirthTraumaContent = ({ questionList }) => {
  const questionIndex = 2;
  const question = questionList[questionIndex];
  // console.log(JSON.stringify(question, undefined, 2));

  const { answers, precept, remaining } = question;

  return (
    <Layout>
      <VStack space={5} alignItems="center">
        <Heading textAlign="center">Birth Trauma</Heading>
        <Box
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          width="90%"
        >
          <Text textAlign="center" variant="blurb">
            This questionnaire asks about your experience during the birth of
            your most recent baby. It asks about potential traumatic events
            during (or immediately after) the labour and birth, and whether you
            are experiencing symptoms that are reported by some women after
            birth.
          </Text>
        </Box>
        <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
          <Text bold variant="contrastSubHeading">
            {precept}
          </Text>

          <Text bold variant="contrastSubHeading">
            you got much less sleep than usual and found that you didn't really
            miss it?
          </Text>

          <Button
            textAlign="center"
            borderColor="white"
            borderWidth="2"
            marginTop={5}
            height="55"
            width="180"
          >
            YES
          </Button>
          <Button
            textAlign="center"
            borderColor="white"
            borderWidth="2"
            marginTop={5}
            height="55"
            width="180"
          >
            NO
          </Button>
        </Box>
      </VStack>
      <HStack paddingTop={2} paddingLeft={1} paddingRight={0} space="160">
        <Button>Back</Button>
        <Button>Next</Button>
      </HStack>
    </Layout>
  );
};
