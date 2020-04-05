/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home';
import Statistices from './screens/Statistice';
import Profile from './screens/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Statistices') {
                iconName = focused ? 'chart-line' : 'chart-line';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'user-circle' : 'user-circle';
              }

              // You can return any component that you like here!
              const bgcolor = focused ? 'black' : 'white';
              return (
                <Icon
                  name={iconName}
                  size={20}
                  style={{
                    backgroundColor: bgcolor,
                    padding: 10,
                    borderRadius: 199,
                  }}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: '#A2A2A2',
            style: {
              backgroundColor: '#fff',
              height: 60,
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Statistices" component={Statistices} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
