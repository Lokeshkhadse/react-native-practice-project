import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../styles/SocialMediaStatusStyles";

const data = {
  'Social Profiles': [
    { name: 'Facebook', icon: 'facebook-f', customers: 58, bgColor: '#DBEAFE', textColor: '#1E3A8A' },
    { name: 'Instagram', icon: 'instagram', customers: 45, bgColor: '#FCE7F3', textColor: '#9D174D' },
    { name: 'Twitter', icon: 'twitter', customers: 32, bgColor: '#E0F2FE', textColor: '#0369A1' },
    { name: 'LinkedIn', icon: 'linkedin-in', customers: 72, bgColor: '#DBEAFE', textColor: '#1D4ED8' },
    { name: 'YouTube', icon: 'youtube', customers: 99, bgColor: '#FECACA', textColor: '#B91C1C' },
    { name: 'Snapchat', icon: 'snapchat-ghost', customers: 12, bgColor: '#FEF9C3', textColor: '#92400E' },
  ],
  'Third Party': [
    { name: 'Housing', icon: 'home', customers: 40, bgColor: '#DCFCE7', textColor: '#166534' },
    { name: 'MagicBricks', icon: 'building', customers: 33, bgColor: '#E9D5FF', textColor: '#6B21A8' },
    { name: '99Acres', icon: 'building', customers: 25, bgColor: '#D1FAE5', textColor: '#065F46' },
    { name: 'QuickerHomes', icon: 'quora', customers: 15, bgColor: '#FFEDD5', textColor: '#78350F' },
    { name: 'Just Lead', icon: 'utensils', customers: 22, bgColor: '#FCE7F3', textColor: '#9D174D' },
  ],
  'Other Sources': [
    { name: 'Website', icon: 'globe', customers: 19, bgColor: '#F3F4F6', textColor: '#374151' },
    { name: 'Direct/Walkin', icon: 'walking', customers: 27, bgColor: '#E0E7FF', textColor: '#3730A3' },
    { name: 'QR Code', icon: 'qrcode', customers: 11, bgColor: '#F4F4F5', textColor: '#44403C' },
  ],
};

const CardList = ({ title, items }) => (
  <View style={styles.cardSection}>
    <Text style={styles.cardSectionTitle}>{title}</Text>
    {items.map((item, idx) => (
      <View
        key={idx}
        style={[styles.card, { backgroundColor: item.bgColor, borderColor: item.textColor }]}
      >
        <View style={styles.cardContent}>
          <View style={[styles.iconCircle, { backgroundColor: '#fff' }]}> 
            <Icon name={item.icon} size={14} color={item.textColor} />
          </View>
          <Text style={[styles.cardName, { color: item.textColor }]}>{item.name}</Text>
        </View>
        <Text style={[styles.cardValue, { color: item.textColor }]}>{item.customers}</Text>
      </View>
    ))}
  </View>
);

const SocialMediaStatus = () => {
  const [selectedOption, setSelectedOption] = useState('Till Date');
  const filterOptions = ['Till Date', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Leads from Source</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedOption}</Text>
        </TouchableOpacity>
      </View>
      {Object.entries(data).map(([section, items], idx) => (
        <CardList key={idx} title={section} items={items} />
      ))}
    </ScrollView>
  );
};

export default SocialMediaStatus;