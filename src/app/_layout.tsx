import "../../global.css";

import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  const isAuthenticated = true;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(auth)" options={{}} />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="(drawer)" options={{}} />
      </Stack.Protected>
    </Stack>
  );
};

export default RootLayout;
