import { get, getDatabase, ref, set } from "@firebase/database";
import { Button, VStack, Text, HStack } from "native-base";
import React, { useMemo, useState } from "react";
import { Layout } from "../components/layout";
import { app } from "../firebase/config";

export const MainScreen = () => {
  const questions = [
    "Has there ever been a period of time in your life when you were not your usual self and you felt so good or hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
    "Has there ever been a period of time in your life when you were not your usual self and you were so irritable that you shouted at people or started fights or arguments?",
    "Has there ever been a period of time in your life when you were not your usual self and you felt much more self-confident than usual?",
  ];
  const [qNumber, setQNumber] = useState(1);
  const database = getDatabase(app, app.options.databaseURL);
  const reference = ref(database, "question/b" + qNumber);
  const text = questions[qNumber - 1];
  const currentValue = useMemo(() => {
    let value = "";
    get(reference).then((snapshot) => {
      if (snapshot.exists()) {
        value = snapshot.val().toString();
      }
    });
    return value;
  }, [reference]);
  const onYes = () => {
    set(reference, "yes");
  };
  const onNo = () => {
    set(reference, "no");
  };
  return (
    <Layout>
      <Text padding={3} color="black">
        {text}
      </Text>
      <Button
        padding={3}
        onPress={onYes}
        isPressed={currentValue.endsWith("yes")}
      >
        YES
      </Button>
      <Button
        padding={3}
        onPress={onNo}
        isPressed={currentValue.endsWith("no")}
      >
        NO
      </Button>
      <HStack space={3} justifyContent="center">
        {qNumber > 1 && (
          <Button
            padding={3}
            onPress={() => {
              setQNumber(qNumber - 1);
            }}
          >
            BACK
          </Button>
        )}
        {qNumber < 3 && (
          <Button
            padding={3}
            onPress={() => {
              setQNumber(qNumber + 1);
            }}
          >
            NEXT
          </Button>
        )}
      </HStack>
    </Layout>
  );
};
