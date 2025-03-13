import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const AppLayout = () => {
  return <Redirect href="/sign-in" />;
};

export default AppLayout;
