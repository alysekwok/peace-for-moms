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
  Text
} from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BipolarCalc } from "../calc/BipolarCalc";
import { BirthTraumaCalc } from "../calc/BirthTraumaCalc";
import { PerinatalAnxietyCalc } from "../calc/PerinatalAnxietyCalc";
import { GadCalc } from "../calc/GadCalc";
import { DepressionCalc } from "../calc/DepressionCalc";
import { ScreeningScreen } from "./ScreeningScreen";
import { useRoute } from "@react-navigation/native";



export const ResultsScreen = () => {
  /***************		HOOKS		***************/

  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();
  const [service, setService] = React.useState("");
  const route = useRoute();


  /***************		JSX		***************/

  return (
    <Layout>
      <VStack space={8} alignItems="center" justifyContent="center">
        <Heading textAlign="center">Screening Results</Heading>
    
      </VStack>
    </Layout>
  );
};
