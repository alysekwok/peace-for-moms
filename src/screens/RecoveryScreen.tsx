import React from "react";
import { Layout } from "../components/Layout";
import { Button, Card, Image, Input, Text, HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnauthRouterParams } from "../routers/UnauthRouter";

export const RecoveryScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m_logo.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<UnauthRouterParams>>();

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
      <Card>
        <VStack space={5}>
          <HStack space={3} justifyContent="space-between">
            <Text color="gray.600" font-size={5}>
              Recover Account
            </Text>
            <Button
              font-size={3}
              paddingTop={1}
              paddingBottom={1}
              paddingRight={2}
              paddingLeft={2}
              backgroundColor="gray.500"
              onPress={() => navigate("Login")}
            >
              Back
            </Button>
          </HStack>
          <Input placeholder="Email" />
          <Button>Send Recovery Link</Button>
        </VStack>
      </Card>
    </Layout>
  );
};
