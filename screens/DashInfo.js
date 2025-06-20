import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddNewLeadModal from './AddNewLeadModal';
import dashInfoStyles from '../styles/dashInfoStyles';

const DashInfo = () => {
  const [leadModal, setLeadModal] = useState(false);

  const stats = [
    { title: 'Total Leads', value: '250', icon: 'user-plus', color: '#0077B6' },
    { title: 'Active', value: '108', icon: 'user-check', color: '#2D6A4F' },
    { title: 'Unassigned', value: '69', icon: 'user-clock', color: '#A67C00' },
    { title: 'Deleted', value: '165', icon: 'user-times', color: '#D00000' },
    { title: 'Booked', value: '33', icon: 'user-tie', color: '#C16C00' },
    { title: 'Not Interested', value: '49', icon: 'user-slash', color: '#6A1B9A' },
  ];

  return (
    <View style={dashInfoStyles.dashInfoContainer}>
      {/* Header */}
      <View style={dashInfoStyles.header}>
        <View>
          <Text style={dashInfoStyles.title}>Dashboard</Text>
          <Text style={dashInfoStyles.subtitle}>
            Welcome back, overview of your leads and team performance:
          </Text>
        </View>
        <TouchableOpacity
          style={dashInfoStyles.addButton}
          onPress={() => setLeadModal(true)}
        >
          <Text style={dashInfoStyles.addButtonText}>+ Add New Lead</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={leadModal} transparent animationType="fade">
        <View style={dashInfoStyles.modalOverlay}>
          <AddNewLeadModal onClose={() => setLeadModal(false)} />
        </View>
      </Modal>

      {/* Stat Cards */}
      <FlatList
        data={stats}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={dashInfoStyles.statRow}
        renderItem={({ item }) => (
          <View style={[dashInfoStyles.statCard, { borderColor: item.color }]}>
            <View>
              <Text style={{ color: item.color, fontSize: 12 }}>{item.title}</Text>
              <Text style={{ color: item.color, fontWeight: 'bold', fontSize: 16 }}>{item.value}</Text>
            </View>
            <Icon name={item.icon} size={20} color={item.color} />
          </View>
        )}
      />
    </View>
  );
};

export default DashInfo;
