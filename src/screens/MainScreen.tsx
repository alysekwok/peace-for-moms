import { get, getDatabase, ref, set } from "@firebase/database";
import { Button, VStack, Text, HStack } from "native-base";
import React, { useMemo, useState } from "react";
import { app } from "../firebase/config";

export const MainScreen = () => {
  const questions = [
    "Has there ever been a period of time in your life when you were not your usual self and you felt so good or hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
    "",
    "",
  ];
  const [qNumber, setQNumber] = useState(1);
  const database = getDatabase(app, app.options.databaseURL);
  const reference = ref(database, "question/b" + qNumber);
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
    <VStack alignItems="center" justifyContent="center" flex={1}>
      <Text color="black">{questions[qNumber]}</Text>
      <Button onPress={onYes} isPressed={currentValue.endsWith("yes")}>
        YES
      </Button>
      <Button onPress={onNo} isPressed={currentValue.endsWith("no")}>
        NO
      </Button>
      <HStack>
        {qNumber > 1 && (
          <Button
            onPress={() => {
              setQNumber(qNumber - 1);
            }}
          >
            BACK
          </Button>
        )}
        {qNumber < 3 && (
          <Button
            onPress={() => {
              setQNumber(qNumber + 1);
            }}
          >
            NEXT
          </Button>
        )}
      </HStack>
    </VStack>
  );
};
