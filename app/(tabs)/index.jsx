import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../../src/screens/HomeScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';
import MovieDetail from '../../src/screens/MovieDetailScreen';
import AboutScreen from '../../src/screens/AboutScreen';
import DetailScreen from '../../src/screens/DetailScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customButton} onPress={onPress}>
    <View style={styles.centralButton}>{children}</View>
  </TouchableOpacity>
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Profile':
            iconName = 'user';
            break;
          case 'Downloads':
            iconName = 'download';
            break;
          case 'Watch':
            iconName = 'play-circle';
            break;
          default:
            iconName = 'compass';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        ...styles.shadow,
      },
      tabBarButton: (props) =>
       props.accessibilityState?.selected ? (
          <CustomTabBarButton {...props} />
        ) : (
          <TouchableOpacity {...props} />
        ),
    })}
  >
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Detail" component={DetailScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={MovieDetail} />
    <Tab.Screen name="About" component={AboutScreen} />
  </Tab.Navigator>
);



const styles = StyleSheet.create({
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
