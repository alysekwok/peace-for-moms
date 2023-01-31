import React from "react";
import { Layout } from "../components/Layout";
import { Button, Text } from "native-base";
import { useAppDispatch } from "../store";
import { logOut } from "../store/slices/AuthSlice";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <Text>This is the Home Screen</Text>
      <Button onPress={() => dispatch(logOut())}>Logout</Button>
    </Layout>
  );
};
