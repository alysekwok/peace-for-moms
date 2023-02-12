import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { auth } from "../firebase/config";
import { Button, Card, Image, Input, Text, HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";

export const RecoveryScreen = () => {
  /***************		HOOKS		***************/

  const [email, setEmail] = useState("");
  const image = require("../images/p4m_logo.png");
  const { goBack } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  /***************		FUNCTIONS		***************/

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleSendEmail = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {})
      .catch((error) => alert(error.message));
  };

  /***************		JSX		***************/

  return (
    <Layout>
      <Image
        alignSelf="center"
        source={image}
        maxHeight={200}
        maxWidth={200}
        resizeMode="contain"
        alt="P4M Logo"
      />
      <Card>
        <VStack space={5}>
          <HStack space={3} justifyContent="space-between">
            <Text color="gray.600" font-size={5}>
              Recover Account
            </Text>
            <Button
              font-size={3}
              paddingTop={1}
              paddingBottom={1}
              paddingRight={2}
              paddingLeft={2}
              backgroundColor="gray.500"
              onPress={() => goBack()}
            >
              Back
            </Button>
          </HStack>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => handleEmailChange(text)}
          />
          <Button onPress={handleSendEmail}> Send Recovery Link</Button>
        </VStack>
      </Card>
    </Layout>
  );
};
