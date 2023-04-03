// @ts-nocheck
import {
  Card,
  Heading,
  VStack,
  FormControl,
  View,
  Image,
  Text,
  Button
} from "native-base";
import firebase from 'firebase/app';
import 'firebase/database';
import React, { useEffect, useRef, useState } from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { Layout } from "../components/Layout";
import { database, auth } from "../firebase/config";
import { ref, set, get } from "firebase/database";


export const ProfileScreen = () => {
  const image = require("../images/p4m-profile.png");
  // const [emailName, setemailName] = useState('');
  //   // useEffect(() => {

  //     const userName = auth.currentUser
      
    
  //     if (userName){

  //     const userEmail = userName.email;
  //     setemailName(userEmail);
  //     } else {
  //     console.error("User not signed in at the moment")
  //     }
  //   // },[]);

  const uid = auth.currentUser.uid;
  const reference = ref(database, `/users/${uid}`);
  const emailName = get(reference)

  /***************		JSX		***************/

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout>
        <FormControl isRequired>
          <VStack space={5} paddingTop={10}>
            <Heading textAlign="center">Profile Information</Heading>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>Name:</Text>
            </Card>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>Phone Number:</Text>
            </Card>
            <View>
            <Card style={{ borderRadius: 8, backgroundColor: "#FBF4BB" }}>
              <Text>Email: {emailName.email}</Text>
            </Card>
            </View>
            <Button>View saved diagnoses</Button>
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
