import React from "react";
import { MainRouter } from "./routers/MainRouter";
import { UnauthRouter } from "./routers/UnauthRouter";
import { useAppSelector } from "./store";

export const MainApp = () => {
  const { isAuthenticated } = useAppSelector((state) => state.Auth);

  return isAuthenticated ? <MainRouter /> : <UnauthRouter />;
};
