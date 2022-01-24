import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CardContainer({ data }) {
  let temperature;
  let humidity;
  //have to find out how to get that
  //check values of temperature and humidity
  if (typeof parseFloat(data.temperature) === 'number') {
    temperature = parseFloat(data.temperature);
  } else {
    temperature = null;
  }

  if (typeof parseFloat(data.humidity) === 'number') {
    humidity = parseFloat(data.humidity);
  } else {
    humidity = null;
  }

  let testvar = typeof data;

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.paragraph}>Temperature:</Text>
        <Text style={styles.mainText}> {data.temperature}</Text>
        <Text style={styles.paragraph}>Humidity</Text>
        <Text>{data.humidity !== null ? data.humidity : 'NOT AVAILABLE'}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalText}>
            Recorded on{' '}
            {data.date !== null || typeof data.date !== 'undefined'
              ? data.date
              : 'NOT AVAILABLE'}{' '}
          </Text>
          <Text style={styles.additionalText}>
            Sensor-Id:{data.sensorId !== null ? data.sensorId : 'NOT AVAILABLE'}{' '}
            & Record-Id:
            {data.id !== null ? data.id : 'NOT AVAILABLE'}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,

  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalInfo: {
    marginTop: 15,
  },
  additionalText: {
    fontStyle: 'italic',
    color: 'grey',
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
