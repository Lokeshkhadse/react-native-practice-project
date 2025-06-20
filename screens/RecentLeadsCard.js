import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../styles/RecentLeadsCardStyles";



const RecentLeadsCard = ({ onViewAll }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recent Leads</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View All Leads</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Icon name="user-friends" size={24} color="#9CA3AF" />
          </View>
          <Text style={styles.emptyTitle}>No leads yet</Text>
          <Text style={styles.emptyText}>
            Click "Add New Lead" to get started.
          </Text>
        </View>
      </View>

      {/* Pagination */}
      <View style={styles.footer}>
        <TouchableOpacity disabled style={[styles.pageButton, styles.disabled]}>
          <Icon name="chevron-left" size={16} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.pageButton, styles.activePage]}>
          <Text style={[styles.pageText, styles.activeText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageButton}>
          <Icon name="chevron-right" size={16} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecentLeadsCard;
