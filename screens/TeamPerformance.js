import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/TeamPerformanceStyles'; // Adjust the path as necessary

const teamData = [
  { name: 'Amit Mehta', initials: 'AM', color: 'blue', leads: 32, progress: 85 },
  { name: 'Priya Kumar', initials: 'PK', color: 'purple', leads: 28, progress: 76 },
  { name: 'Ankit Kumar', initials: 'AK', color: 'green', leads: 25, progress: 62 },
  { name: 'Sneha Das', initials: 'SD', color: 'yellow', leads: 22, progress: 54 },
  { name: 'Rajesh Joshi', initials: 'RJ', color: 'red', leads: 18, progress: 45 },
];

const attendance = [
  { initials: 'AM', color: 'blue', name: 'Amit Mehta' },
  { initials: 'PK', color: 'purple', name: 'Priya Kumar' },
  { initials: 'AK', color: 'green', name: 'Ankit Kumar' },
  { initials: 'SD', color: 'yellow', name: 'Sneha Das' },
  { initials: 'RJ', color: 'red', name: 'Rajesh Joshi' },
  { initials: 'NV', color: 'gray', name: 'Neha Verma' },
  { initials: 'VP', color: 'gray', name: 'Vikas Patel', absent: true },
];

const colorMap = {
  blue: { bg: '#DBEAFE', text: '#2563EB' },
  purple: { bg: '#EDE9FE', text: '#7C3AED' },
  green: { bg: '#D1FAE5', text: '#10B981' },
  yellow: { bg: '#FEF3C7', text: '#D97706' },
  red: { bg: '#FECACA', text: '#DC2626' },
  gray: { bg: '#F3F4F6', text: '#6B7280' },
};

const TeamPerformance = () => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Team Performance</Text>
        <TouchableOpacity>
          <Text style={styles.link}>View Team</Text>
        </TouchableOpacity>
      </View>

      {/* Performance List */}
      <View style={styles.performanceList}>
        {teamData.map((member, idx) => {
          const color = colorMap[member.color] || colorMap.gray;
          return (
            <View key={idx} style={styles.row}>
              <View style={[styles.avatar, { backgroundColor: color.bg }]}>
                <Text style={[styles.initials, { color: color.text }]}>{member.initials}</Text>
              </View>
              <View style={styles.info}>
                <View style={styles.infoHeader}>
                  <Text style={styles.name}>{member.name}</Text>
                  <Text style={styles.leads}>{member.leads} leads</Text>
                </View>
                <View style={styles.progressRow}>
                  <View style={styles.progressBarBackground}>
                    <View
                      style={[
                        styles.progressBar,
                        { width: `${member.progress}%`, backgroundColor: '#2563EB' },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>{member.progress}%</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      {/* Attendance */}
      <View style={styles.attendanceContainer}>
        <View style={styles.attendanceHeader}>
          <Text style={styles.attendanceTitle}>Team Attendance Today</Text>
          <Text style={styles.present}>86% Present</Text>
        </View>
        <View style={styles.attendanceList}>
          {attendance.map((member, idx) => {
            const color = colorMap[member.color] || colorMap.gray;
            return (
              <View
                key={idx}
                style={[
                  styles.attendanceCircle,
                  {
                    backgroundColor: color.bg,
                    opacity: member.absent ? 0.4 : 1,
                  },
                ]}
              >
                <Text style={{ color: color.text, fontSize: 12 }}>{member.initials}</Text>
              </View>
            );
          })}
          <View style={[styles.attendanceCircle, styles.dashedCircle]}>
            <Text style={styles.plusMore}>+5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeamPerformance;
