import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/addNewLeadStyles';

const AddNewLeadModal = ({ visible, onClose }) => {
  const navigation = useNavigation();


  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    leadSource: 'website',
    assignTo: '',
    project: '',
    propertyInterest: '',
    minBudget: '',
    maxBudget: '',
    notes: '',
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
    Alert.alert('Lead Added', 'Your lead has been submitted');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Add New Lead</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={styles.inputGroup}>
              {[
                { label: 'First Name', key: 'firstName' },
                { label: 'Last Name', key: 'lastName' },
                { label: 'Email Address', key: 'email' },
                { label: 'Phone Number', key: 'phone' },
              ].map(({ label, key }) => (
                <View key={key} style={styles.inputWrapper}>
                  <Text style={styles.label}>{label}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={label}
                    value={form[key]}
                    onChangeText={(val) => handleChange(key, val)}
                  />
                </View>
              ))}

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Lead Source</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Lead Source"
                  value={form.leadSource}
                  onChangeText={(val) => handleChange('leadSource', val)}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Assign To</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Assign To"
                  value={form.assignTo}
                  onChangeText={(val) => handleChange('assignTo', val)}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Project</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Project"
                  value={form.project}
                  onChangeText={(val) => handleChange('project', val)}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Property Interest</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Property Type"
                  value={form.propertyInterest}
                  onChangeText={(val) => handleChange('propertyInterest', val)}
                />
              </View>

              <View style={styles.budgetRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Min Budget</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Min"
                    value={form.minBudget}
                    onChangeText={(val) => handleChange('minBudget', val)}
                    keyboardType="numeric"
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.label}>Max Budget</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Max"
                    value={form.maxBudget}
                    onChangeText={(val) => handleChange('maxBudget', val)}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Notes</Text>
                <TextInput
                  style={[styles.input, { height: 80 }]}
                  multiline
                  placeholder="Notes"
                  value={form.notes}
                  onChangeText={(val) => handleChange('notes', val)}
                />
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={{ color: 'white' }}>Add Lead</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewLeadModal;
