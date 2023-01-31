import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Button, Card, Image, Input, Text, VStack, HStack } from "native-base";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";

export function RegisterScreen() {
  /***************		HOOKS		***************/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const image = require("../images/p4m_logo.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  /***************		FUNCTIONS		***************/

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setErrorCode("");
  };

  const handleSignUp = () => {
    if (password != confirmationPassword) {
      setErrorCode("Your passwords don't match");
      return;
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
        })
        .catch((error) => alert(error.message));
    }
  };

  /***************		JSX		***************/

  return (
    <Layout>
      <Image
        alignSelf="center"
        source={image}
        maxHeight={200}
        maxWidth={200}
        alt="P4M Logo"
      />
      <Card>
        <VStack space={3}>
          <HStack space={3} justifyContent="space-between">
            <Text color="gray.600" font-size={5}>
              Register
            </Text>
            <Button
              font-size={3}
              paddingTop={1}
              paddingBottom={1}
              paddingRight={2}
              paddingLeft={2}
              backgroundColor="gray.500"
              onPress={() => navigate("Login")}
            >
              Back
            </Button>
          </HStack>
          <Input placeholder="Email" onChangeText={handleEmailChange} />
          <Input
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmationPassword}
            onChangeText={setConfirmationPassword}
          />
          <Text>{errorCode}</Text>
          <Button onPress={handleSignUp}>Register</Button>
        </VStack>
      </Card>
    </Layout>
  );
}
