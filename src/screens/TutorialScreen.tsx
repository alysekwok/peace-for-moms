import React from "react";
import { Layout } from "../components/Layout";
import { Button, Card, Image, Input, Text, Stack, HStack, VStack, Heading, Box, Divider } from "native-base";
import { useAppDispatch } from "../store";
import { logOut } from "../store/slices/AuthSlice";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";
import { TouchableOpacity } from "react-native";

export const TutorialScreen = () => {
  /***************		HOOKS		***************/
  const image = require("../images/p4m-slogan-logo.png");
  const logo = require("../images/p4m-back-arrow.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  /***************		JSX		***************/

  return (
    <Layout paddingTop={7}>
        <Image
            alignSelf='center'
            paddingTop={10}
            source={image}
            maxHeight={85}
            maxWidth={350}
            alt="P4M Logo"
        />
        <VStack space = {5} alignItems="center" paddingBottom={20}>
            <HStack space={120}>
                <Button height={60} width={140}>Contact Us</Button>
                <TouchableOpacity onPress={() => navigate("Home")}>
                    <Image
                    source={logo}
                    maxHeight={50}
                    maxWidth={50}
                    alt="P4M Logo"
                    />
                    <Text alignSelf='center'>Back</Text>
                </TouchableOpacity>
            </HStack>
            <Box p='3.5' bg="yellow.100" alignItems="center" borderRadius={30} width="90%">
                <Heading textAlign="center" variant="blurb"> 2 main functions of the Peace for Moms app
                </Heading>
            </Box>
            <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
                <Text bold variant="contrastSubHeading">Diagnose a patient:</Text>
                <Text variant="contrastBody">On the Home page, select "New Diagnosis."
                Here, you can select from a list of symptoms that your patient is facing. 
                When you submit you will receive possible diagnoses and treatments.</Text>
                <Divider my="3"/>
                <Text bold variant="contrastSubHeading">Contact Peace for Moms directly:</Text>
                <Text variant="contrastBody">Select "Contact Us" on the Home page
                or after receiving a diagnosis for 
                information to reach a Peace for Moms professional directly.</Text>
            </Box>
        </VStack>
    </Layout>
  );
};