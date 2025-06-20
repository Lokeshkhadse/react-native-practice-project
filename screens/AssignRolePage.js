import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from "../styles/AssignRolePageStyle"; // Adjust the path as necessary

const roles = [
  { value: "admin", label: "🛡️ Admin" },
  { value: "lead", label: "💼 Lead" },
  { value: "manager", label: "📊 Manager" },
  { value: "support", label: "🏧 Support" },
];

export default function AssignRolePage() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState();
  const [isAssigning, setIsAssigning] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Assign Role</Text>

        <TextInput
          style={styles.input}
          value={search}
          placeholder="Search user by email"
          onChangeText={setSearch}
          editable={!isAssigning}
        />

        <Text style={styles.label}>Select Role</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedRole}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
          >
            <Picker.Item label="Select a role" value={null} />
            {roles.map((role) => (
              <Picker.Item key={role.value} label={role.label} value={role.value} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity
          style={[styles.button, (!selectedRole || isAssigning) && styles.disabledButton]}
          onPress={() => setIsAssigning(true)}
          disabled={!selectedRole || isAssigning}
        >
          {isAssigning ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Assign Role</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}