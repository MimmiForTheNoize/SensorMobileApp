import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet,ScrollView, FlatList } from 'react-native';
import List from './List';
import { Card } from 'react-native-paper';
import CardContainer from './CardContainer';

export default function LatestList() {


    const [records, setRecords] = useState([]);


  /*
'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/1'

*/

  const handleFetchData = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.66:9191/sensorrecords/findNewestSensorrecords/10'
    );
    const data = await result.json();
    setRecords(data);
  });

  useEffect(() => {
    handleFetchData();
  }, []);


  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>10 newest Records</Text>

      <ScrollView>
        <View>
      {records.map((data) => 
          <Card style={styles.myMargin}>
          <CardContainer key={data.id} data={data}/>
          </Card>
      
      )}
      </View>
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({

    myMargin: {
      marginBottom: 40,
    },

    screen: {
    padding: 25,
    marginBottom: 50,
  },
  heading: {
  margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E88E5',
  },
});


