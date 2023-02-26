import React from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, Heading, Box, Divider, Button } from "native-base";

function CreateButtonGroup() {
    return (
        <VStack space={5}>
            <Button variant="outline" >Bipolar</Button>
            <Button variant="outline">Anxiety</Button>
            <Button variant="outline">Postnatal Depression</Button>
            <Button variant="outline">Birth Trauma</Button>
        </VStack>
    )
}

export const ScreeningTypeScreen = () => {
  /***************		JSX		***************/

  return (
    <Layout>
      <VStack space={8} alignItems="center">
        <Heading textAlign="center">What are you screening for?</Heading>
        <CreateButtonGroup/>
        <Button>Next</Button>
      </VStack>
    </Layout>
  );
};
