import React from "react";
import { Layout } from "../components/Layout";
import { VStack, Heading, Button, Box, Select, CheckIcon, Center } from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function CreateButtonGroup() {
  return (
    <VStack space={5}>
      <Button variant="outline">Bipolar</Button>
      <Button variant="outline">Anxiety</Button>
      <Button variant="outline">Postnatal Depression</Button>
      <Button variant="outline">Birth Trauma</Button>
    </VStack>
  );
}

function CreateSelect() {
  const [service, setService] = React.useState("");
  return <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Screening Type" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Bipolar" value="bipolar" />
          <Select.Item label="Anxiety" value="anxiety" />
          <Select.Item label="Postnatal Depression" value="depression" />
          <Select.Item label="Birth Trauma" value="trauma" />
        </Select>
      </Box>
    </Center>;
}

export const ScreeningTypeScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();

  /***************		JSX		***************/
  return (
    <Layout>
      <VStack space={8} alignItems="center">
        <Heading textAlign="center">What are you screening for?</Heading>
        {/* <CreateButtonGroup /> */}
        <CreateSelect/>
        <Button onPress={() => navigate("Screening")}>Next</Button>
      </VStack>
    </Layout>
  );
};
