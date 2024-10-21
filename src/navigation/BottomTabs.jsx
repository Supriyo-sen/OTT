import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Placeholder Screen</Text>
  </View>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Home' ? 'home' : 'user';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
