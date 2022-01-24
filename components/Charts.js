import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import {
  VictoryScatter,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  tickValues
} from 'victory-native';

export default function Charts() {
  const [data24, setData24] = useState([]);
  const [data168, setData168] = useState([]);
  const [data720, setData720] = useState([]);
  const [buttonHumOpacity, setButtonHumOpacity] = useState(false);

  /*
'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/1'

*/

  const handleFetchData24 = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/hours/28'
    );
    const data = await result.json();
    setData24(data);
  });

  const handleFetchData168 = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/hours/168'
    );
    const data = await result.json();
    setData168(data);
  });

  const handleFetchData720 = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/hours/720'
    );
    const data = await result.json();
    setData720(data);
  });

  useEffect(() => {
    handleFetchData24();
    handleFetchData168();
    handleFetchData720();
  }, []);

  const dataTemp24 = [];
  const dataTemp168 = [];
  const dataTemp720 = [];

  const dataHum24 = [];
  const dataHum168 = [];
  const dataHum720 = [];

  if (data24.length > 0) {
    data24.map((item) => {
      let tempObj = {};
      let humObj = {};
      tempObj.x = item.timestamp;
      tempObj.y = item.temperature;
      dataTemp24.push(tempObj);
      humObj.x = item.timestamp;
      humObj.y = item.humidity;
      dataHum24.push(humObj);
    });
  }

  if (data168.length > 0) {
    data168.map((item) => {
      let tempObj = {};
      let humObj = {};
      tempObj.x = item.timestamp;
      tempObj.y = item.temperature;
      dataTemp168.push(tempObj);
      humObj.x = item.timestamp;
      humObj.y = item.humidity;
      dataHum168.push(humObj);
    });
  }

  if (data720.length > 0) {
    data720.map((item) => {
      let tempObj = {};
      let humObj = {};
      tempObj.x = item.timestamp;
      tempObj.y = item.temperature;
      dataTemp720.push(tempObj);
      humObj.x = item.timestamp;
      humObj.y = item.humidity;
      dataHum720.push(humObj);
    });
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
      
      <Text style={styles.desc}>Clicking the button shows either the data for Temperature or for Humiditiy.</Text>
        <TouchableOpacity
        style={styles.button}
          onPress={() =>
            buttonHumOpacity === true
              ? setButtonHumOpacity(false)
              : setButtonHumOpacity(true) 
          }>
          <Text style={styles.buttonText}>{buttonHumOpacity ? "Humidity" : "Temperature"}</Text>
        </TouchableOpacity>
        <View>
       
          <Text style={styles.heading}>Last 24 Hours</Text>
          <VictoryChart
            domainPadding={{ x: 200 }}
            size={7}
            style={{
              background: { fill: 'lavender' },
              labels: {
                fontSize: 15,
                fill: '#c43a31',
                padding: 15,
              },
            }}>
       <VictoryAxis
            scale="time"
            standalone={false}
              style={{
                axisLabel: { padding: 100 },
                ticks: { stroke: 'none' },
                tickLabels: { fill: 'transparent' },
              }}
            tickValues={tickValues}
            tickFormat={''}
        />
            <VictoryAxis
              dependentAxis
          
              width={400}
              height={400}
              theme={VictoryTheme.material}
              standalone={true}
        
              label="temp or hum"
            />
            <VictoryScatter
              data={buttonHumOpacity ? dataHum24 : dataTemp24}
              labels={({ datum }) => `C: ${datum.y}`}
            />
          </VictoryChart>

          <View>
            <Text style={styles.heading}>Last 7 Days</Text>
            <VictoryChart
              domainPadding={{ x: 200 }}
              size={7}
              style={{
                background: { fill: 'lavender' },
                labels: {
                  fontSize: 15,
                  fill: '#c43a31',
                  padding: 15,
                },
              }}>
              <VictoryAxis
      
                width={400}
                height={400}
                domain={[-10, 10]}
                theme={VictoryTheme.material}
                standalone={false}
                label="Hours"
                style={{
                  axisLabel: { padding: 100 },
                  ticks: { stroke: 'none' },
                  tickLabels: { fill: 'transparent' },
                }}
              />
           <VictoryAxis
            scale="time"
            standalone={false}
              style={{
                axisLabel: { padding: 100 },
                ticks: { stroke: 'none' },
                tickLabels: { fill: 'transparent' },
              }}
            tickValues={tickValues}
            tickFormat={''}
        />
            <VictoryAxis
              dependentAxis
          
              width={400}
              height={400}
              theme={VictoryTheme.material}
              standalone={true}
        
              label="temp or hum"
            />
              <VictoryScatter
                data={buttonHumOpacity ? dataHum168 : dataTemp168}
                labels={({ datum }) => ` ${datum.y}`}
              />
            </VictoryChart>
          </View>

          <View>
            <Text style={styles.heading}>Last 30 Days</Text>
            <VictoryChart
              domainPadding={{ x: 200 }}
              size={7}
              style={{
                background: { fill: 'lavender' },
                labels: {
                  fontSize: 15,
                  fill: '#c43a31',
                  padding: 15,
                },
              }}>
            <VictoryAxis
            scale="time"
            standalone={false}
              style={{
                axisLabel: { padding: 100 },
                ticks: { stroke: 'none' },
                tickLabels: { fill: 'transparent' },
              }}
            tickValues={tickValues}
            tickFormat={''}
        />
            <VictoryAxis
              dependentAxis
          
              width={400}
              height={400}
              theme={VictoryTheme.material}
              standalone={true}
        
              label="temp or hum"
            />
              <VictoryScatter
                data={buttonHumOpacity ? dataHum720 : dataTemp720}
                labels={({ datum }) => ` ${datum.y}`}
              />
            </VictoryChart>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E88E5',
  },
    buttonText: {
    color: '#fff',
  },
  desc: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
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
});
