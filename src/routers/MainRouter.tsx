import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TutorialScreen } from "../screens/TutorialScreen";
import { Screening } from "../screens/ScreeningScreen";
import { ScreeningTypeScreen } from "../screens/ScreeningTypeScreen";
import { EmergencyScreen } from "../screens/EmergencyScreen";
import { TabRouter, TabRouterParams } from "./TabRouter";
import { NavigatorScreenParams } from "@react-navigation/native";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";

export type MainRouterParams = {
  TabRouter: NavigatorScreenParams<TabRouterParams>;
  Tutorial: undefined;
  Screener: undefined;
  Screening: undefined;
  Emergency: undefined;
};

const Stack = createNativeStackNavigator<MainRouterParams>();

export const MainRouter = () => {
  /***************		JSX		***************/

  return (
    <Stack.Navigator
      initialRouteName="TabRouter"
      screenOptions={{
        headerTitle: () => <Header />,
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen
        name="TabRouter"
        component={TabRouter}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
      <Stack.Screen name="Screener" component={ScreeningTypeScreen} />
      <Stack.Screen name="Screening" component={Screening} />

    </Stack.Navigator>
  );
};