import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { MainScreen } from "../screens/MainScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { RecoveryScreen } from "../screens/RecoveryScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { EmergencyScreen } from "../screens/EmergencyScreen";
import { TutorialScreen } from "../screens/TutorialScreen";

export type UnauthRouterParams = {
  Login: undefined;
  Register: undefined;
  Recovery: undefined;
};

const Stack = createNativeStackNavigator<UnauthRouterParams>();

export const UnauthRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
    </Stack.Navigator>
  );
};
