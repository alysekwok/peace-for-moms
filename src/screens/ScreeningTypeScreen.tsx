import React from "react";
import { Layout } from "../components/Layout";
import {
  VStack,
  Heading,
  Button,
  Box,
  Select,
  CheckIcon,
  Center,
} from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const ScreeningTypeScreen = () => {
  /***************		HOOKS		***************/

  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const [service, setService] = React.useState("");

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
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Bipolar" value="bipolar" />
              <Select.Item label="Postnatal Depression" value="depression" />
              <Select.Item label="Birth Trauma" value="birth_trauma" />
              <Select.Item label="GAD Anxiety" value="GAD_anxiety" />
              <Select.Item
                label="Perinatal Anxiety"
                value="perinatal_anxiety"
              />
            </Select>
          </Box>
        </Center>
        <Button
          onPress={() => navigate("Screening", { screeningType: service })}
        >
          Next
        </Button>
      </VStack>
    </Layout>
  );
};
