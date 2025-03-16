import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { router, Slot } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

const AppLayout = () => {
  const { isAuthLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !isAuthLoading) {
      router.replace("/sign-in");
    }
  }, [isAuthenticated, isAuthLoading]);

  if (isAuthLoading) {
    return (
      <View className="flex items-center justify-center h-screen">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <Slot />;
};

export default AppLayout;