import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{}}>
      <Drawer.Screen name="(home)" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About Us" }} />
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
