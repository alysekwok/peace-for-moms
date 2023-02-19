import React from "react";
import { Layout } from "../components/Layout";
import {
  Button,
  Text,
  HStack,
  VStack,
  Heading,
  Box,
  Divider,
} from "native-base";

export const TutorialScreen = () => {
  /***************		JSX		***************/

  return (
    <Layout paddingTop={7}>
      <VStack space={5} alignItems="center" paddingBottom={20}>
        <HStack space={120}>
          <Button>Contact Us</Button>
        </HStack>
        <Box
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          width="90%"
        >
          <Heading textAlign="center" variant="blurb">
            {" "}
            2 main functions of the Peace for Moms app
          </Heading>
        </Box>
        <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
          <Text bold variant="contrastSubHeading">
            Diagnose a patient:
          </Text>
          <Text variant="contrastBody">
            On the Home page, select "New Diagnosis." Here, you can select from
            a list of symptoms that your patient is facing. When you submit you
            will receive possible diagnoses and treatments.
          </Text>
          <Divider my="3" />
          <Text bold variant="contrastSubHeading">
            Contact Peace for Moms directly:
          </Text>
          <Text variant="contrastBody">
            Select "Contact Us" on the Home page or after receiving a diagnosis
            for information to reach a Peace for Moms professional directly.
          </Text>
        </Box>
      </VStack>
    </Layout>
  );
};
