// components/Navbar.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../styles/navbarStyle";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation(); // ✅ useNavigation hook
  const [userName, setUserName] = useState("User");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Simulate decoding token
    const nameFromToken = "John Doe";
    setUserName(nameFromToken);
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    setDropdownVisible(false);
    navigation.replace("Login"); // ✅ replace instead of navigate
  };

  return (
    <View style={styles.navbar}>
      {/* Company Name */}
      <Text style={styles.companyName}>XYZ Solution Pvt Ltd</Text>

      {/* Right Side Icons */}
      <View style={styles.iconContainer}>
        <Icon name="bell" size={22} color="#4B5563" style={styles.icon} />
        <TouchableOpacity onPress={() => setDropdownVisible(true)}>
          <Icon name="user-circle" size={24} color="#4B5563" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownHeader}>👤 {userName}</Text>

            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate("Profile");
              }}
            >
              <Icon name="user" size={16} color="#6B7280" />
              <Text style={styles.dropdownText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => {
                setDropdownVisible(false);
                navigation.navigate("Settings");
              }}
            >
              <Icon name="cog" size={16} color="#6B7280" />
              <Text style={styles.dropdownText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
              <Icon name="sign-out-alt" size={16} color="#EF4444" />
              <Text style={[styles.dropdownText, { color: "#EF4444" }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Navbar;
