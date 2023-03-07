import {
  useTheme,
  Stack,
  IStackProps,
  StatusBar,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

interface IProps extends IStackProps {
  disablePadding?: boolean;
}

export const Layout: React.FC<IProps> = ({
  disablePadding,
  children,
  ...rest
}) => {
  /***************     Hooks       ***************/

  const theme = useTheme();

  /***************     JSX     ***************/

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
    >
        <StatusBar barStyle="dark-content" />
        <Stack flex={1} space={3} margin={3} {...rest} justifyContent="center">
          {children}
        </Stack>
    </SafeAreaView>
  );
};
