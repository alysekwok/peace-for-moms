import React from "react";
import { Layout } from "../components/Layout";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  Stack,
  HStack,
} from "native-base";
import { useAppDispatch } from "../store";
import { logOut } from "../store/slices/AuthSlice";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";
import { TouchableOpacity } from "react-native";
import { MainRouterParams } from "../routers/MainRouter";

export const HomeScreen = () => {
  /***************		HOOKS		***************/
  
  const image = require("../images/p4m-slogan-logo.png");
  const image2 = require("../images/p4m-pic-1.png");
  const logo1 = require("../images/back_logo.png");
  const logo2 = require("../images/tutorial_logo.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();

  /***************		FUNCTIONS		***************/

  const dispatch = useAppDispatch();

  return (
    <Layout paddingTop={10}>
      <Image
        alignSelf='center'
        source={image}
        maxHeight={85}
        maxWidth={350}
        alt="P4M Logo"
      />
      <HStack paddingTop={0} alignSelf='center' space='200'>
        <VStack>
          <TouchableOpacity onPress={() => dispatch(logOut())}>
            <Image
              source={logo1}
              maxHeight={50}
              maxWidth={50}
              alt="P4M Logo"
            />
            <Text alignSelf='center'>Log Out</Text>
          </TouchableOpacity>
        </VStack>
        <VStack>
          <TouchableOpacity onPress={() => navigate("Tutorial")}>
            <Image
              source={logo2}
              maxHeight={50}
              maxWidth={50}
              alt="P4M Logo"
            />
            <Text alignSelf='center'>Tutorial</Text>
          </TouchableOpacity>
        </VStack>
      </HStack>
      <VStack>
        <Heading 
        textAlign="center"
        color="black"
        >Home</Heading>
      </VStack>
      <Card>
        <VStack space={3}>
          <Button>New Diagnosis</Button>
          <Button onPress={() => navigate("Emergency")}>Contact Us</Button>
        </VStack>
      </Card>
      <Stack paddingTop={0}>
        <Image
          alignSelf='center'
          source={image2}
          maxHeight={300}
          maxWidth={300}
          alt="P4M Logo"
        />
      </Stack>
    </Layout>
  );
};
