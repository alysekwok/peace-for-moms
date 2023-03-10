import {
  Card,
  Heading,
  VStack,
  FormControl,
  View,
  Image,
  Text
} from "native-base";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Layout } from "../components/Layout";

export const ProfileScreen = () => {
  const image = require("../images/p4m-profile.png");

  /***************		JSX		***************/

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout>
        <FormControl isRequired>
          <VStack space={5} paddingTop={10}>
            <Heading textAlign="center">Profile</Heading>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>Currently signed in as</Text>
            </Card>
            <Card style={{ borderRadius: 8, backgroundColor: "#D9D9D9" }}>
              <Text>View saved diagnoses</Text>
            </Card>
            <VStack space={2}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}></View>
              </View>
            </VStack>
          </VStack>
        </FormControl>
        <Image
          alignSelf="center"
          source={image}
          resizeMode="contain"
          alt="P4M profile"
        />
      </Layout>
    </TouchableWithoutFeedback>
  );
};
