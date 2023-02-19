import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Card,
  Heading,
  Text,
  VStack,
  Input,
  Stack,
  FormControl,
  View,
  TextArea,
  HStack,
  Spacer,
  Image,
  Button,
  Link,
} from "native-base";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Layout } from "../components/Layout";
import { MainRouterParams } from "../routers/MainRouter";

export const ContactScreen = () => {
  /***************		HOOKS		***************/

  const image = require("../images/p4m-contact.png");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<MainRouterParams>>();

  /***************		JSX		***************/

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout>
        <FormControl>
          <VStack space={3}>
            <Heading textAlign="center">Contact</Heading>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>
                NOTE: This is not an emergency service. For crisis resources,
                click <Link onPress={() => navigate("Emergency")}>here</Link>.
              </Text>
            </Card>
            <VStack space={2}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Input p={2} mr={2} placeholder="Name" />
                </View>
                <View style={{ flex: 2 }}>
                  <Input p={2} placeholder="Email" />
                </View>
              </View>
              <Input p={2} placeholder="Subject" />
              <TextArea
                p={2}
                placeholder="Message"
                autoCompleteType={undefined}
              />
            </VStack>
          </VStack>
        </FormControl>
        <Button>Send Message</Button>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M Contact"
        />
      </Layout>
    </TouchableWithoutFeedback>
  );
};
