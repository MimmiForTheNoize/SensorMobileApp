import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import showData from './showData';
import Charts from './Charts';

const screens = {

  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Sensor Records',
    }
  },
  Records: {
    screen: showData
  },
  Charts: {
    screen: Charts
  }


}
const Navigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#006064', height: 80},
  }
});

export default createAppContainer(Navigation);