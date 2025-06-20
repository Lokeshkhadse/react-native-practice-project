// screens/HomeScreen.js
import React from "react";
import { View } from "react-native";
import Navbar from "./Navbar"; // Adjust path if it's different
import SideBar from "./Sidebar";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <SideBar/>
    </View>
  );
};

export default HomeScreen;
