import React, { useState } from "react";
import { Layout } from "../components/Layout";
import {
  VStack,
  Heading,
  Button,
  Box,
  Select,
  CheckIcon,
  Center,
  Card,
  Text
} from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useValue } from "react-native-reanimated";

export const ScreeningTypeScreen = () => {
  /***************		HOOKS		***************/

  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const [service, setService] = useState("");
  const [info, setInfo] = useState("")

  /***************		FUNCTIONS		***************/

  const handleSelect = (itemValue) => {
    setService(itemValue);
    if (service == "bipolar") {
      return "THE MOOD DISORDER QUESTIONNAIRE: The MDQ was developed by a team of psychiatrists, researchers and consumer advocates to address a critical need for timely and accurate diagnosis of bipolar disorder, which can be fatal if left untreated. The questionnaire takes about five minutes to complete, and can provide important insights into diagnosis and treatment. Clinical trials have indicated that the MDQ has a high rate of accuracy; it is able to identify seven out of ten people who have bipolar disorder and screen out nine out of ten people who do not."
    } else if (service == "depression") {
      return "EDINBURGH POSTNATAL DEPRESSION SCALE (EPDS): This questionnaire was developed to assist professionals in detecting mothers suffering from postpartum depression. The scale consists of 10 short statements. For each statement, select one of four possible answers that is closest to how your patient has felt during the past week."
    } else if (service == "birth_trauma") {
      return "CITY BIRTH TRAUMA SCALE: This a questionnaire that asks patients about their experience during the birth of their most recent baby. It asks about potential traumatic events during (or immediately after) the labour and birth, and whether you are experiencing symptoms that are reported by some women after birth. The questionnaire can be used as a measure of PTSD symptoms from childbirth."
    } else if (service == "GAD_anxiety") {
      return "GAD-7 ANXIETY SURVEY: This is a quick survey where patients respond how often they have experienced various feelings from anxiety following child birth. It can be used to determine the severity of the anxiety the patient is feeling."
    } else if (service == "perinatal_anxiety") {
      return "Perinatal Anxiety Screening Scale (PASS): The PASS is a valid and reliable 31-item instrument designed to screen for problematic anxiety in postpartum women. It differentiates between high and low risk for presenting with an anxiety disorder by measuring four domains that address specific symptoms of anxiety as they present in perinatal women. These domains form subscales which include: 1) Excessive Worry and Specific Fears, 2) Perfectionism, Control and Trauma, 3) Social Anxiety, and 4) Acute Anxiety and Adjustment. The PASS was validated for perinatal (i.e., pregnant or less than 1 year postpartum) women who are English-speaking, literate, and aged 18 years and older."
    } else {
      return "";
    }
  };

  /***************		JSX		***************/
  return (
    <Layout>
      <VStack space={8} alignItems="center" justifyContent="center">
        <Heading textAlign="center">What are you screening for?</Heading>
        <Center>
          <Box maxW="300">
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Screening Type"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => {setInfo(handleSelect(itemValue))}}
            >
              <Select.Item label="Bipolar" value="bipolar" />
              <Select.Item label="Postnatal Depression" value="depression" />
              <Select.Item label="Birth Trauma" value="birth_trauma" />
              <Select.Item label="GAD Anxiety" value="GAD_anxiety" />
              <Select.Item
                label="Perinatal Anxiety"
                value="perinatal_anxiety"
              /> {}
            </Select>
          </Box>
        </Center>
        <Button
          onPress={() => navigate("Screening", { screeningType: service })}
        >
          Next
        </Button>
        <Card bg = {info == "" ? "white":"yellow.100"} alignItems="center" borderRadius={30}>
          <Text textAlign="center" color="black">
            {info}
          </Text>
        </Card>
      </VStack>
    </Layout>
  );
};
