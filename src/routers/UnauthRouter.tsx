import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { MainScreen } from "../screens/MainScreen";
import { RecoveryScreen } from "../screens/RecoveryScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

export type UnauthRouterParams = {
  Login: undefined;
  Register: undefined;
  Recovery: undefined;
};

const Stack = createNativeStackNavigator();

export const UnauthRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  );
};
