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
  Home: undefined;
  Register: undefined;
  Recovery: undefined;
  Emergency: undefined;
  Tutorial: undefined;
};

const Stack = createNativeStackNavigator();

export const UnauthRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
