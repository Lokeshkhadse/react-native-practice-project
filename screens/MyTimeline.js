// MyTimelineMobile.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/MyTimelineStyle';

const MyTimeline = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const fetchAndUpdateLocation = async (status) => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
    console.log(`📍 ${status} location:`, location.coords);
    // Simulate API call here
  };

  const handleClockIn = () => {
    setIsClockedIn(true);
    fetchAndUpdateLocation('Clocked In');

    intervalRef.current = setInterval(() => {
      fetchAndUpdateLocation('Clockin-updated');
    }, 60000);
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    fetchAndUpdateLocation('Clocked Out');
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📍 MyTimeline</Text>
      <Text style={styles.subheading}>Track your attendance timeline</Text>

      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

      {location && (
        <View style={styles.coordsBox}>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Clock In" onPress={handleClockIn} disabled={isClockedIn} color="#16A34A" />
        <Button title="Clock Out" onPress={handleClockOut} disabled={!isClockedIn} color="#DC2626" />
      </View>

      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Your Location"
          />
        </MapView>
      )}
    </View>
  );
};

export default MyTimeline;