// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../styles/authStyles";

export default function LoginScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("login");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = () => {
    if (loginForm.email && loginForm.password) {
      alert(`Login success: ${loginForm.email}`);
      navigation.replace("Home"); // ✅ Navigate to Home with Navbar
    } else {
      alert("Please enter email and password");
    }
  };

  const handleRegisterSubmit = () => {
    if (
      registerForm.name &&
      registerForm.lastName &&
      registerForm.email &&
      registerForm.phone &&
      registerForm.password &&
      registerForm.confirmPassword
    ) {
      alert(`Registered: ${registerForm.email}`);
      setActiveTab("login");
      setRegisterForm({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      navigation.replace("Home"); // ✅ Navigate to Home with Navbar
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CarNation</Text>
      <Text style={styles.subtitle}>
        {activeTab === "login"
          ? "Login to your account"
          : "Create a new account"}
      </Text>

      <View style={styles.tabContainer}>
        {["login", "register"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={styles.tabText}>
              {tab === "login" ? "Login" : "Register"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "login" ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={loginForm.email}
            onChangeText={(text) =>
              setLoginForm((s) => ({ ...s, email: text }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={loginForm.password}
            onChangeText={(text) =>
              setLoginForm((s) => ({ ...s, password: text }))
            }
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.switchText}>
            Don’t have an account?{" "}
            <Text
              style={styles.linkText}
              onPress={() => setActiveTab("register")}
            >
              Register
            </Text>
          </Text>
        </View>
      ) : (
        <View style={styles.form}>
          {[
            ["First Name", "name"],
            ["Last Name", "lastName"],
            ["Email", "email"],
            ["Phone", "phone"],
            ["Password", "password"],
            ["Confirm Password", "confirmPassword"],
          ].map(([label, key], i) => (
            <TextInput
              key={i}
              style={styles.input}
              placeholder={label}
              secureTextEntry={label.toLowerCase().includes("password")}
              value={registerForm[key]}
              onChangeText={(text) =>
                setRegisterForm((s) => ({ ...s, [key]: text }))
              }
            />
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={handleRegisterSubmit}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.switchText}>
            Already have an account?{" "}
            <Text
              style={styles.linkText}
              onPress={() => setActiveTab("login")}
            >
              Login
            </Text>
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
