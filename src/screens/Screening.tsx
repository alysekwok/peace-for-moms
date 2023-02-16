import React from "react";
import { Layout } from "../components/Layout";
import {
  Text,
  VStack,
  HStack,
  Heading,
  Box,
  Divider,
  Button,
  Card,
} from "native-base";

export const Screening= () => {
    /***************		JSX		***************/
  
    return (
      <Layout>
        <VStack space={5} alignItems="center">
          <Heading textAlign="center">Screening</Heading>
          <Box
            p="3.5"
            bg="yellow.100"
            alignItems="center"
            borderRadius={30}
            width="90%"
          >
            <Text textAlign="center" variant="blurb">
              Please check the answer that is right for you.
              Has there ever been a period of time in your life when you were not your usual self and...
            </Text>
          </Box>
          <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
            <Text bold variant="contrastSubHeading">
              you got much less sleep than usual and found that you didn't really miss it?
            </Text>
            
                <Button borderColor = "white" borderWidth = "2" marginTop={5}>Yes</Button>
                <Button borderColor = "white" borderWidth = "2" marginTop={5}>No</Button> 
             
             </Box>
            </VStack>
            <HStack paddingTop={2} paddingLeft = {1} paddingRight = {0} space="160">
             <Button>Back</Button>
             <Button>Next</Button> 
             </HStack>
      </Layout>
    );
  };