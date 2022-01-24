import React, { useEffect, useCallback, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import CardContainer from './CardContainer';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);


  /*
'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/1'

*/

  const handleFetchData = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/1'
    );
    const data = await result.json();
    setData(data);
  });

  useEffect(() => {
    handleFetchData();
  }, []);

  console.log(data);

  const pressHandlerRecords = () => {
    navigation.navigate('Records');
  };

  const pressHandlerCharts = () => {
    navigation.navigate('Charts');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.desc}> View latest 10 Records </Text>
        <TouchableOpacity style={styles.button} onPress={pressHandlerRecords}>
          <Text style={styles.buttonText}>Records</Text>
        </TouchableOpacity>
        <Text style={styles.desc}>Temperature & Humidity Charts</Text>
        <TouchableOpacity style={styles.button} onPress={pressHandlerCharts}>
          <Text style={styles.buttonText}>Charts</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{data.id}</Text>
      </View>
      <Text style={styles.paragraph}>Latest Records</Text>
      {data.map((item) => (
        <Card>
          <CardContainer key={item.id} data={item} />
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  button: {
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 10,
    minWidth: '48%',
    textAlign: 'center',
    color: '#fff',
  },

  desc: {
    marginBottom: 5,
    textAlign: 'center',
  },

  buttonText: {
    color: '#fff',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E88E5',
  },
});
