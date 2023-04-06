import React from "react";
import { Layout } from "../components/Layout";
import {
  VStack,
  Heading,
  Text
} from "native-base";
import { MainRouterParams } from "../routers/MainRouter";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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
        <Heading textAlign="center">{route.params.result[0]}</Heading>
        <Text>Your score: {route.params.result[1]}</Text>
        <Text>{route.params.result[2]}</Text>
      </VStack>
    </Layout>
  );
};
