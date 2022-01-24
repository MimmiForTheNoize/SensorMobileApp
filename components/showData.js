import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import CardContainer from './CardContainer';
import LatestList from './LatestList';


export default function showData() { 

return(
  <View>
    <LatestList />
  </View>
);

}