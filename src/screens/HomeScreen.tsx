import React from "react";
import { Layout } from "../components/Layout";
import {
  Button,
  Card,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Pressable,
} from "native-base";
import { useAppDispatch } from "../store";
import { logOut } from "../store/slices/AuthSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainRouterParams } from "../routers/MainRouter";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HomeScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m-pic-1.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();

  /***************		FUNCTIONS		***************/

  const dispatch = useAppDispatch();

  /***************		JSX		***************/

  return (
    <Layout>
      <VStack flex="space-between" space={3}>
        <HStack paddingTop={0} alignSelf="center" space="200">
          <Pressable alignItems="center" onPress={() => dispatch(logOut())}>
            <Icon
              name="logout"
              as={MaterialCommunityIcons}
              size="4xl"
              color="primary.400"
            />
            <Text textAlign="center">Log Out</Text>
          </Pressable>
          <Pressable alignItems="center" onPress={() => navigate("Tutorial")}>
            <Icon
              name="help-circle-outline"
              as={MaterialCommunityIcons}
              size="4xl"
              color="primary.400"
            />
            <Text textAlign="center">Tutorial</Text>
          </Pressable>
        </HStack>
        <Card>
          <VStack space={3}>
            <Button onPress={() => navigate("Screener")}>New Diagnosis</Button>
            <Button onPress={() => navigate("Emergency")}>Contact Us</Button>
          </VStack>
        </Card>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M Logo"
        />
      </VStack>
    </Layout>
  );
};
