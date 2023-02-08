import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { EmergencyScreen } from "../screens/EmergencyScreen";

export type MainRouterParams = {
  Home: undefined;
};

const Stack = createNativeStackNavigator();

export const MainRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
    </Stack.Navigator>
  );
};
