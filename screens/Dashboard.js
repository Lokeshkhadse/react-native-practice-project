// Dashboard.js (React Native Version)
import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DashInfo from './DashInfo';
import DashInfoTwo from './DashInfoTwo';
import SocialMediaStatus from './SocialMediaStatus';
import RecentLeadsHeader from './RecentLeadsCard';
import TeamPerformance from './TeamPerformance';
import { dashboardStyles } from '../styles/dashboardStyles'; // Adjust the path as necessary

const Dashboard = () => {
  const navigation = useNavigation();


  return (
    <ScrollView style={dashboardStyles.container}>
      <DashInfo />
      <DashInfoTwo />
      <View style={dashboardStyles.sectionContainer}>
        <SocialMediaStatus />
      </View>
      <View style={dashboardStyles.rowContainer}>
        <View style={dashboardStyles.leftCol}>
          <RecentLeadsHeader />
        </View>
        <View style={dashboardStyles.rightCol}>
          <TeamPerformance />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;