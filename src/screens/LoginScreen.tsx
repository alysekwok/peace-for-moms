import React, { useEffect, useState } from "react";
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
} from "native-base";
import { auth } from "../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../store";
import { setAuthState } from "../store/slices/AuthSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";

export const LoginScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m_logo.png");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

  /***************		FUNCTIONS		***************/

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(setAuthState({ user: user, isAuthenticated: true }));
      })
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
        alt="P4M Logo"
      />
      <VStack>
        <Heading textAlign="center">
          Welcome to the PEACE for Moms Toolkit App
        </Heading>
      </VStack>
      <Card>
        <VStack space={3}>
          <Text color="gray.600">Log in or register to continue</Text>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Button onPress={handleLogin}>Log In</Button>
          <Text color="gray.600">Don't have an account?</Text>
          <Button onPress={() => navigate("Register")}>Register</Button>
          <Text color="gray.600">Forgot Your Password?</Text>
          <Button onPress={() => navigate("Recovery")}>Recover Password</Button>
        </VStack>
      </Card>
    </Layout>
  );
};
