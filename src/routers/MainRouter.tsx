import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { TutorialScreen } from "../screens/TutorialScreen";

export type MainRouterParams = {
  Home: undefined;
  Tutorial: undefined;
};

const Stack = createNativeStackNavigator();

export const MainRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
    </Stack.Navigator>
  );
};
