import { NativeBaseProvider } from "native-base";
import { theme } from "./src/utils/nativeBase";
import React from "react";
import { Provider } from "react-redux";
import { MainApp } from "./src/MainApp";
import { store } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
