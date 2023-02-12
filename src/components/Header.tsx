import React from "react";
import { Box, Image } from "native-base";
import { Layout } from "./Layout";

export const Header = () => {
  const image = require("../images/p4m-header-logo.png");

  return (
      <Image
        source={image}
        maxHeight={25}
        maxWidth={250}
        resizeMode="stretch"
        alt="P4M Logo"
      />
  );
};
