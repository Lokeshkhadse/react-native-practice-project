import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  FontAwesome5,
} from '@expo/vector-icons'; // or 'react-native-vector-icons/FontAwesome5'
import styles from '../styles/DashInfoTwoStyles'; // Adjust the path as necessary

const iconMap = {
  'FaUserPlus': 'user-plus',
  'FaClock': 'clock',
  'FaPhoneAlt': 'phone-alt',
  'FaCalendarCheck': 'calendar-check',
  'FaMapMarkerAlt': 'map-marker-alt',
  'FaExclamationCircle': 'exclamation-circle',
};

const cardData = [
  {
    title: 'New Leads',
    count: 8,
    icon: 'user-plus',
    bgColor: '#BFDBFE',
    textColor: '#1E40AF',
  },
  {
    title: 'Pending',
    count: 10,
    icon: 'clock',
    bgColor: '#BBF7D0',
    textColor: '#166534',
  },
  {
    title: 'Callbacks',
    count: 11,
    icon: 'phone-alt',
    bgColor: '#FEF9C3',
    textColor: '#92400E',
  },
  {
    title: 'Meeting Scheduled',
    count: 40,
    icon: 'calendar-check',
    bgColor: '#FECACA',
    textColor: '#7F1D1D',
  },
  {
    title: 'Site Visit Scheduled',
    count: 20,
    icon: 'map-marker-alt',
    bgColor: '#FED7AA',
    textColor: '#78350F',
  },
  {
    title: 'Overdue',
    count: 40,
    icon: 'exclamation-circle',
    bgColor: '#E9D5FF',
    textColor: '#6B21A8',
  },
];

const DashInfoTwo = () => {
  return (
    <View style={styles.container}>
      {cardData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.card,
            { backgroundColor: item.bgColor, borderColor: item.textColor },
          ]}
        >
          <View>
            <Text style={[styles.title, { color: item.textColor }]}>
              {item.title}
            </Text>
            <Text style={[styles.count, { color: item.textColor }]}>
              {item.count.toString().padStart(2, '0')}
            </Text>
          </View>
          <FontAwesome5 name={item.icon} size={22} color={item.textColor} />
        </View>
      ))}
    </View>
  );
};

export default DashInfoTwo;
