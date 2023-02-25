import React, { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { Button, Card, Image, Input, Text, VStack, HStack } from "native-base";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";
import { TextInput } from "react-native";
import { useAppDispatch } from "../store";
import { setAuthState } from "../store/slices/AuthSlice";

export function RegisterScreen() {
  /***************		HOOKS		***************/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const image = require("../images/p4m_logo.png");
  const { goBack } =
     useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  const passwordInputRef = useRef<TextInput>();
  const dispatch = useAppDispatch();

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
          dispatch(setAuthState({ user: user, isAuthenticated: true }));
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
        resizeMode="contain"
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
              onPress={() => goBack()}
            >
              Back
            </Button>
          </HStack>
          <Input
            placeholder="Email"
            onChangeText={handleEmailChange}
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmationPassword}
            onChangeText={setConfirmationPassword}
            onSubmitEditing={handleSignUp}
          />
          <Text>{errorCode}</Text>
          <Button onPress={handleSignUp}>Register</Button>
        </VStack>
      </Card>
    </Layout>
  );
}
