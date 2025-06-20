// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ✅ Import your screen components
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import AssignRolePage from './screens/AssignRolePage';
import MyTimeline from './screens/MyTimeline';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* ✅ Route names should be strings and unique */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AssignRole" component={AssignRolePage} />
        <Stack.Screen name="MyTimeline" component={MyTimeline } />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
